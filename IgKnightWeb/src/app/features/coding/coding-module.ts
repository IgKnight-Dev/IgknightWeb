import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodingRoutingModule } from './coding-routing-module';
import { FormsModule } from '@angular/forms';
import { CodingQuestionList } from './coding-question-list/coding-question-list';
import { CodingQuestionDetail } from './coding-question-detail/coding-question-detail';
import { CodingChallengesPage } from './coding-challenges.page/coding-challenges.page';
import { CodingChallengesHeader } from './coding-challenges-header/coding-challenges-header';
import { EditorPane } from './components/editor-pane/editor-pane';
import { QuestionTabs } from './components/question-tabs/question-tabs';
import { MetaInfo } from './components/meta-info/meta-info';
import { ActionButtons } from './components/action-buttons/action-buttons';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';


@NgModule({
  declarations: [
    // Add your components here
    CodingQuestionList,
    CodingQuestionDetail,
    CodingChallengesPage,
    CodingChallengesHeader,
    EditorPane,
    QuestionTabs,
    MetaInfo,
    ActionButtons
  ],
  imports: [
    CommonModule,
    CodingRoutingModule,
    FormsModule,
    MonacoEditorModule.forRoot()
  ]
})
export class CodingModule { }
