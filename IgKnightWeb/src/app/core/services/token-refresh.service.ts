import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TokenRefreshService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  refreshToken(): Observable<string> {
    const refreshToken = this.tokenService.getRefreshToken();
    if (!refreshToken) throw new Error('Missing refresh token');

    return this.http.post<any>('/api/login/auth/refresh-token', { refreshToken }).pipe(
      map((response) => {
        this.tokenService.setAccessToken(response.accessToken);
        this.tokenService.setRefreshToken(response.refreshToken);
        return response.accessToken;
      })
    );
  }
}
