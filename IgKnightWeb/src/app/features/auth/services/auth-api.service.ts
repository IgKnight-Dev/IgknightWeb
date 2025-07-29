// features/auth/services/auth-api.service.ts
import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/apiservice';
import { LoginRequest } from '../../../models/LoginRequest';
import { UserRegister } from '../../../models/UserRegister';
import { environment } from '../../../../environments/environment';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  private baseUrl = environment.loginApiUrl;

  constructor(private http: ApiService) {}

  async Login(data: LoginRequest): Promise<LoginResponse> {
    return await this.http.post(this.baseUrl, 'auth/user/login', data);
  }

  async RegisterUser(data: UserRegister): Promise<void> {
    return await this.http.post(this.baseUrl, 'auth/user/register', data);
  }
  
  // async GoogleLogin(token: string): Promise<LoginResponse> {
  //   return await this.http.post('auth/google-login', { token });
  // }

  loginWithGoogle(): void {
  window.location.href = ' http://localhost:7048/api/auth/google-login';
  }
}
