import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from './profile-page/profile-page';
import { Assignments } from './assignments/assignments';
import { SavedCode } from './saved-code/saved-code';
import { UserDetails } from './user-details/user-details';

const routes: Routes = [{
  path: '',
  component: ProfilePage
},
{
  path: 'user-details',
  component: UserDetails
},
{
  path: 'view-assignments',
  component: Assignments
},
{
  path: 'view-saved-code',
  component: SavedCode 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
