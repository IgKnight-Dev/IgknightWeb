import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Documentation } from './pages/documentation/documentation';
import { TopicPage } from './pages/topic-page/topic-page';

const routes: Routes = [
  {
    path: '',
    component: Documentation,
    children: [
      { path: ':technology', component: TopicPage },
      { path: ':technology/:slug', component: TopicPage },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
