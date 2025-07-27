import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing-module';
import { UserDetails } from './user-details/user-details';
import { Assignments } from './assignments/assignments';
import { SavedCode } from './saved-code/saved-code';
import { ProfilePage } from './profile-page/profile-page';


@NgModule({
  declarations: [
    UserDetails,
    Assignments,
    SavedCode,
    ProfilePage
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
