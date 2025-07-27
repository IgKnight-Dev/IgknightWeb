// core/services/http.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient) {
  }

  async post(baseUrl: string, endpoint: string, body: Object = {}, params: HttpParams = new HttpParams()): Promise<any> {
    return await firstValueFrom(
      this.http.post(`${baseUrl}/${endpoint}`, body, { params })
    );
  }

  async put(baseUrl: string, endpoint: string, body: Object = {}, params: HttpParams = new HttpParams()): Promise<any> {
    return await firstValueFrom(
      this.http.put(`${baseUrl}/${endpoint}`, body, { params })
    );
  }
  async delete(baseUrl: string, endpoint: string, params: HttpParams = new HttpParams()): Promise<any> {
    return await firstValueFrom(
      this.http.delete(`${baseUrl}/${endpoint}`, { params })
    );
  }

  async get<T>(baseUrl: string, endpoint: string): Promise<T> {
    return await firstValueFrom(this.http.get<T>(`${baseUrl}/${endpoint}`));
  }
}
