import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from '../services/auth-api.service';
import { LoginRequest } from '../../../models/LoginRequest';
import { OtpApiService } from '../services/otp-api.service';
import { ToastrService } from 'ngx-toastr'; // <-- Add this import
import { TokenService } from '../../../core/services/token.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login implements OnInit {
  username = '';
  password = '';
  captchaInput = '';
  captchaImageUrl = '';
  captchaId = '';
  isLoading = false;
  errorMessage = '';
  showPassword = false;

  constructor(
    private authApi: AuthApiService,
    private otpApi: OtpApiService,
    private router: Router,
    private toastr: ToastrService,
    private tokenService: TokenService,
  ) {}

  ngOnInit(): void {
    this.loadCaptcha();
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  loadCaptcha(): void {
    this.otpApi.getCaptcha()
      .then(response => {
        this.captchaId = response.captchaId;
        this.captchaImageUrl = response.imageBase64;
      })
      .catch(err => {
        console.error('Failed to load captcha', err);
        this.captchaId = '';
        this.captchaImageUrl = '';
      });
  }

  signInWithGoogle(): void {
    this.authApi.loginWithGoogle()
  }

  async onLogin(): Promise<void> {
    this.isLoading = true;
    this.errorMessage = '';

    const loginRequest: LoginRequest = {
      email: this.username,
      password: this.password,
      captchaId: this.captchaId,
      captchaToken: this.captchaInput,
      ipAddress: this.getIpAddress(),
      deviceId: this.getDeviceId(),
      deviceType: this.getDeviceType()
    };

    try {
      const result = await this.authApi.Login(loginRequest);
      if (result?.accessToken) 
      {
          this.tokenService.setTokens(result.accessToken, result.refreshToken);
      }
      this.toastr.success('Login successful!');
      this.router.navigate(['/documentation']);
    } catch (err: any) {
      const msg = err?.error?.message || 'Login failed. Check your credentials and CAPTCHA.';
      this.toastr.error(msg);
      this.loadCaptcha();
    } finally {
      this.isLoading = false;
    }
  }

  private getIpAddress(): string | undefined {
    return undefined;
  }

  private getDeviceId(): string {
    return 'device-id-placeholder';
  }

  private getDeviceType(): string {
    return 'web';
  }
}