import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/apiservice';
import { UserDto } from '../../../models/UserDto ';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserApiService {
  constructor(private http: ApiService) {}
  private baseUrl = environment.loginApiUrl;

  async getUserProfile(): Promise<UserDto> {
    return await this.http.get<UserDto>(this.baseUrl, 'user/details');
  }

  async getUserAssignments(): Promise<any[]> {
    return await this.http.get<any[]>(this.baseUrl, 'user/assignments');
  }

  async getUserSavedCode(): Promise<any[]> {
    return await this.http.get<any[]>(this.baseUrl, 'user/saved-code');
  }

  async getTotalUsersCount(): Promise<number> {
    return await this.http.get<number>(this.baseUrl, 'user/active-users/count');
  }
}
