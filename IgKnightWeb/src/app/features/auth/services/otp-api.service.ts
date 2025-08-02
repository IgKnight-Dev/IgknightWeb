import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/apiservice';
import { OtpRequest } from '../../../models/OtpRequest';
import { SendEmailOtpRequest } from '../../../models/SendEmailOtpRequest';
import { CaptchaResponse } from '../../../models/CaptchaResponse ';
import { RecipientType } from '../../../models/Enums';
import { HttpParams } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class OtpApiService {
  constructor(private apiService: ApiService) {}
  private baseUrl = environment.loginApiUrl;


  // Send OTP to user
  async sendEmailOtp(data: SendEmailOtpRequest): Promise<void> {
    await this.apiService.post(this.baseUrl, 'otp/send/email', data);
  }

  // Verify OTP entered by the user
  verifyOtp(userId: string | null, recipient: string, recipientType: RecipientType, otpCode: string ): Promise<any> {
      let params = new HttpParams();
      if (userId !== null) 
      {
        params = params.set('userId', userId);
      }
      params = params
        .set('recipient', recipient)
        .set('recipientType', recipientType.toString())
        .set('otpCode', otpCode);

    return this.apiService.post(this.baseUrl, 'otp/verify', {}, params);
  }


  // Option 2: Return Promise by converting observable to promise
  getCaptcha(): Promise<CaptchaResponse> {
      console.log(this.baseUrl, "base url")
      return this.apiService.get<CaptchaResponse>(this.baseUrl, 'captcha');
  }
}
