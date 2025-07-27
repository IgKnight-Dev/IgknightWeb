import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home-module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./features/auth/auth-module').then(m => m.AuthModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/profile/profile-module').then(m => m.ProfileModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard-module').then(m => m.DashboardModule)
  },
  {
    path: 'practice',
    loadChildren: () => import('./features/practice/practice-module').then(m => m.PracticeModule)
  },
  {
    path: 'challenge',
    loadChildren: () => import('./features/coding/coding-module').then(m => m.CodingModule)
  },
  {
    path: 'heroes',
    loadChildren: () => import('./features/motivation/motivation-module').then((m) => m.MotivationModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./features/courses/courses-module').then(m => m.CoursesModule)
  },
  {
    path: 'documentation',
    loadChildren: () => import('./features/documentation/documentation-module').then(m => m.DocumentationModule)
  },
  {
    path: 'admin-panel',
    loadChildren: () => import('./content/content-module').then(m => m.ContentModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./features/auth/register/register-module').then((m) => m.RegisterModule)
  },
  {
    path: 'try-editor/:technology',
    loadChildren: () => import('./features/editor/editor-module').then((m) => m.EditorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
