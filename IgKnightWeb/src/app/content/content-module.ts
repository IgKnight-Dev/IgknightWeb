import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing-module';
import { Layout } from './layout/layout';
import { Assignments } from './assignments/assignments';
import { Dashboard } from './dashboard/dashboard';
import { Users } from './users/users';
import { Settings } from './settings/settings';
import { LucideAngularModule, BookOpen, Users as UsersIcon, TrendingUp, Trophy } from 'lucide-angular';
import { AssignmentsList } from './assignments-list/assignments-list';
import { AssignmentsForm } from './assignments-form/assignments-form';
import { AddCourse } from './CoursesFolder/add-course/add-course';
import { ViewCourses } from './CoursesFolder/view-courses/view-courses';
import { CoursesParent } from './CoursesFolder/courses-parent/courses-parent';
import { InboxPage } from './inbox/inbox-page/inbox-page';
import { FeedbackCard } from './inbox/feedback-card/feedback-card';
import { FeedbackDetail } from './inbox/feedback-detail/feedback-detail';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { QuestionsPage } from './questions-page/questions-page';
import { QuestionList } from './question-list/question-list';
import { QuestionDetail } from './question-detail/question-detail';
import { UserManagement } from './user-management/user-management';

@NgModule({
  declarations: [
    Layout,
    Assignments,
    Dashboard,
    Users,
    Settings,
    AssignmentsForm,
    AssignmentsList,
    AddCourse,
    ViewCourses,
    CoursesParent,
    InboxPage,
    FeedbackCard,
    FeedbackDetail,
    QuestionsPage,
    QuestionList,
    QuestionDetail,
    UserManagement
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    LucideAngularModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ]
})
export class ContentModule { }
