import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpClient,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import {
  catchError,
  switchMap,
  filter,
  take,
} from 'rxjs/operators';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshSubject = new BehaviorSubject<string | null>(null);

  constructor(
    private tokenService: TokenService,
    private http: HttpClient,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Ignore refresh calls to avoid infinite loop
        if (error.status === 401 && !req.url.includes('/login/auth/refresh-token')) {
          return this.handle401Error(req, next);
        }

        return throwError(() => error);
      })
    );
  }

  private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshSubject.next(null);

      const refreshToken = this.tokenService.getRefreshToken();
      if (!refreshToken) {
        this.tokenService.clearTokens();
        this.router.navigate(['/auth/login']);
        return throwError(() => new Error('No refresh token'));
      }

      return this.http.post<any>('/api/login/auth/refresh-token', { refreshToken }).pipe(
        switchMap((response) => {
          this.isRefreshing = false;
          this.tokenService.setTokens(response.accessToken, response.refreshToken);
          this.refreshSubject.next(response.accessToken);

          const clonedRequest = req.clone({
            setHeaders: {
              Authorization: `Bearer ${response.accessToken}`,
            },
          });

          return next.handle(clonedRequest);
        }),
        catchError((err) => {
          this.isRefreshing = false;
          this.tokenService.clearTokens();
          this.router.navigate(['/auth/login']);
          return throwError(() => err);
        })
      );
    } else {
      return this.refreshSubject.pipe(
        filter((token) => token != null),
        take(1),
        switchMap((token) => {
          const clonedRequest = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });
          return next.handle(clonedRequest);
        })
      );
    }
  }
}
