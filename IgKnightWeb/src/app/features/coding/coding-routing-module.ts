import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodingQuestionList } from './coding-question-list/coding-question-list';
import { CodingQuestionDetail } from './coding-question-detail/coding-question-detail';
import { CodingChallengesPage } from './coding-challenges.page/coding-challenges.page';
import { CodingChallengesHeader } from './coding-challenges-header/coding-challenges-header';

const routes: Routes = [
  {
  path: '',
      component: CodingChallengesHeader,
      children: [
        { path: '', component: CodingChallengesPage },
        { path: 'coding-challenges', component: CodingQuestionList },
        { path: 'coding-challenges/:id', component: CodingQuestionDetail },
      ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodingRoutingModule { }
