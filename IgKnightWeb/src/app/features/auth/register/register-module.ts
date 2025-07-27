import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing-module';
import { Signup } from './signup/signup';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Signup
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule
  ]
})
export class RegisterModule { }
