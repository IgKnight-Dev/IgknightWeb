import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotivationPage } from './components/motivation.page/motivation.page';

const routes: Routes = [
  {
    path: '',
    component: MotivationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotivationRoutingModule { }
