import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAssignments } from './page/all-assignments/all-assignments';
import { PracticeHome } from './page/practice-home/practice-home';
import { PracticeLayout } from './layout/practice-layout/practice-layout';
import { InterviewPrep } from './page/interview-prep/interview-prep';
import { IntercativeQuizzes } from './page/intercative-quizzes/intercative-quizzes';

const routes: Routes = [
  {
    path: '',
    component: PracticeLayout,
    children: [
      { path: '', component: PracticeHome },
      { path: 'assignments', component: AllAssignments },
      { path: 'interview-prep', component: InterviewPrep },
      { path: 'assignment/:assignmentId', component: IntercativeQuizzes },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule { 
}
