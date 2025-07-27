import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthApiService } from '../../services/auth-api.service';
import { OtpApiService } from '../../services/otp-api.service';
import { SendEmailOtpRequest } from '../../../../models/SendEmailOtpRequest';
import { UserRegister } from '../../../../models/UserRegister';
import { OtpRequest } from '../../../../models/OtpRequest';
import { RecipientType } from '../../../../models/Enums';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss']
})
export class Signup implements OnInit {
  fullName = '';
  email = '';
  password = '';
  confirm = '';
  otp = '';
  captchaInput = '';
  originalEmail: string = '';

  isOtpSent = false;
  isOtpVerified = false;
  isSendingOtp = false;
  isVerifyingOtp = false;
  isLoading = false;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  passwordFocused = false;
  confirmFocused = false;

  otpSentMessage = '';
  otpVerifyMessage = '';
  errorMessage = '';
  successMessage = '';

  captchaId = '';
  captchaImageUrl = '';

  @ViewChild('otpRef') otpRef!: NgModel;
  @ViewChild('captchaRef') captchaRef!: NgModel;

  constructor(
    private authApi: AuthApiService,
    private otpApi: OtpApiService,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadCaptcha();
  }

  ngDoCheck(): void {
  if (this.isOtpVerified && this.email !== this.originalEmail) {
    this.isOtpVerified = false;
    this.otpVerifyMessage = 'Email changed. Please re-verify OTP.';
    this.otp = '';
  }
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

  onReset() {
    this.fullName = '';
    this.email = '';
    this.otp = '';
    this.captchaInput = '';
    this.password = '';
    this.confirm = '';
    this.isOtpSent = false;
    this.isOtpVerified = false;
    this.otpSentMessage = '';
    this.otpVerifyMessage = '';
    this.captchaImageUrl = ''; // Optionally reload CAPTCHA here
    this.showPassword = false;
    this.showConfirmPassword = false;
    // Optionally reload CAPTCHA
    this.loadCaptcha?.();
  }

  async onSendOtp() {
    if (!this.email) return;

    this.isSendingOtp = true;
    this.otpSentMessage = '';
    this.isOtpVerified = false; // Reset OTP verification state on resend
    this.otpVerifyMessage = '';
    this.otp = '';

    try {
      const request: SendEmailOtpRequest = { email: this.email };
      await this.otpApi.sendEmailOtp(request);
      this.isOtpSent = true;
      this.otpSentMessage = 'OTP sent successfully!';
    } catch (error) {
      this.otpSentMessage = 'Failed to send OTP. Please try again.';
    } finally {
      this.isSendingOtp = false;
    }
  }

  async onVerifyOtp() {
    if (!this.otp) return;

    this.isVerifyingOtp = true;
    this.otpVerifyMessage = '';

    try {
      const verified = await this.otpApi.verifyOtp('', this.email, RecipientType.Email, this.otp);
      if (verified) {
        this.isOtpVerified = true;
        this.originalEmail = this.email; // ✅ Store the verified email
        this.otpVerifyMessage = 'OTP verified successfully!';
      } else {
        this.isOtpVerified = false;
        this.otpVerifyMessage = 'Invalid OTP. Please try again.';
      }
    } catch (error) {
      this.isOtpVerified = false;
      this.otpVerifyMessage = 'Invalid OTP. Please try again.';
    } finally {
      this.isVerifyingOtp = false;
    }
  }


  async onSignup(form: NgForm) {
  if (
    form.invalid ||
    this.password !== this.confirm ||
    !this.isOtpVerified ||
    !this.captchaInput ||
    this.captchaRef.invalid
  ) {
    return;
  }

  this.isLoading = true;
  this.errorMessage = '';
  this.successMessage = '';

  const registrationRequest: UserRegister = {
    username: this.fullName,
    email: this.email,
    password: this.password,
    captchaId: this.captchaId,
    captchaToken: this.captchaInput
  };

  try {
      await this.authApi.RegisterUser(registrationRequest);
      this.toastr.success('Registration successful!');
      form.resetForm();
      this.resetStatesAfterSignup();
    } catch (error: any) {
      // If using HttpClient, error.error.message will have the API message
      const msg = error?.error?.message || 'Signup failed. Please try again.';
      this.toastr.error(msg);
      this.loadCaptcha();
    } finally {
      this.isLoading = false;
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  private resetStatesAfterSignup() {
    this.isOtpSent = false;
    this.isOtpVerified = false;
    this.isSendingOtp = false;
    this.isVerifyingOtp = false;
    this.otpSentMessage = '';
    this.otpVerifyMessage = '';
    this.errorMessage = '';
    this.captchaInput = '';
    this.captchaId = '';
    this.captchaImageUrl = '';
    this.loadCaptcha();
  }
}
