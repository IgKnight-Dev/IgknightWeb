import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { OauthCallback } from './oauth-callback/oauth-callback';

const routes: Routes = [
  { path: '', component: Login },
  { path: 'oauth-callback', component: OauthCallback },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
