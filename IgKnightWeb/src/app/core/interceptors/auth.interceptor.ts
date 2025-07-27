import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../services/token.service';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { TokenRefreshService } from '../services/token-refresh.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    private tokenRefreshService: TokenRefreshService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getAccessToken();
    const authReq = token
      ? req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        })
      : req;

    return next.handle(authReq).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          error.status === 401 &&
          !authReq.url.includes('/login/auth/refresh-token') // prevent loop
        ) {
          return this.tokenRefreshService.refreshToken().pipe(
            switchMap((newAccessToken: string) => {
              const cloned = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${newAccessToken}`)
              });
              return next.handle(cloned);
            }),
            catchError((refreshError) => {
              this.tokenService.clearTokens(); // logout user
              window.location.href = '/login'; // optional redirect
              return throwError(() => refreshError);
            })
          );
        }
        return throwError(() => error);
      })
    );
  }
}
