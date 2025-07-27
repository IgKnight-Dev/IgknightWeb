import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { Login } from './login/login';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { CoreModule } from '../../core/core-module';
import { OauthCallback } from './oauth-callback/oauth-callback';


@NgModule({
  declarations: [
    Login,
    OauthCallback
  ],
  imports: [
    CommonModule,
    FormsModule ,
    AuthRoutingModule,
    CoreModule
  ],
})
export class AuthModule { }
