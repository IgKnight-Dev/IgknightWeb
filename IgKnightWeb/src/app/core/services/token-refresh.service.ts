import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { from, map, Observable } from 'rxjs';
import { ApiService } from './apiservice';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TokenRefreshService {
  constructor(private http: ApiService, private tokenService: TokenService) {}
  private baseUrl = environment.loginApiUrl;

  refreshToken(): Observable<string> {
    const refreshToken = this.tokenService.getRefreshToken();
    if (!refreshToken) {
      throw new Error('Missing refresh token');
    }

    // Convert the Promise returned by 'post' to Observable using 'from'
    return from(this.http.post(this.baseUrl, '/auth/refresh-token', refreshToken )).pipe(
      map((response) => {
        // Save the new tokens in local storage or wherever necessary
        this.tokenService.setAccessToken(response.accessToken);
        this.tokenService.setRefreshToken(response.refreshToken);

        // Return the access token
        return response.accessToken;
      })
    );
  }
}
