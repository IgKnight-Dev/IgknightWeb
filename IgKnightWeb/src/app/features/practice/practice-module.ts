import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeRoutingModule } from './practice-routing-module';
import { PracticeHome } from './page/practice-home/practice-home';
import { AllAssignments } from './page/all-assignments/all-assignments';
import { IntercativeQuizzes } from './page/intercative-quizzes/intercative-quizzes';
import { InterviewPrep } from './page/interview-prep/interview-prep';
import { TechnologyPractice } from './page/technology-practice/technology-practice';
import { PopularPractice } from './page/popular-practice/popular-practice';
import { FormsModule } from '@angular/forms';
import { PracticeLayout } from './layout/practice-layout/practice-layout';


@NgModule({
  declarations: [
    PracticeHome,
    AllAssignments,
    IntercativeQuizzes,
    InterviewPrep,
    TechnologyPractice,
    PopularPractice,
    PracticeLayout
  ],
  imports: [
    CommonModule,
    PracticeRoutingModule,
    FormsModule
  ]
})
export class PracticeModule { }
