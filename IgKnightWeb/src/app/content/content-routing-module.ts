import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Layout } from './layout/layout';
import { Assignments } from './assignments/assignments';
import { CoursesParent } from './CoursesFolder/courses-parent/courses-parent';
import { InboxPage } from './inbox/inbox-page/inbox-page';
import { UserManagement } from './user-management/user-management';
import { Settings } from './settings/settings';

const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'assignments', component: Assignments },
      { path: 'courses', component: CoursesParent },
      { path: 'inbox', component: InboxPage },
      { path: 'users', component: UserManagement },
      { path: 'settings', component: Settings },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
