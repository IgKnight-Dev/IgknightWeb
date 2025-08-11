import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing-module';
import { Documentation } from './pages/documentation/documentation';
import { TopicPage } from './pages/topic-page/topic-page';
import { ProTip } from './components/pro-tip/pro-tip';
import { CodeBlock } from './components/code-block/code-block';
import { SearchTopics } from './components/search-topics/search-topics';
import { TechnologyTabs } from './components/technology-tabs/technology-tabs';
import { TopicList } from './components/topic-list/topic-list';
import { TopicsWrapper } from './components/topics-wrapper/topics-wrapper';
import { PlaceHolder } from './components/place-holder/place-holder';
import { SharedModule } from '../../shared/shared-module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Documentation,
    TopicPage,
    ProTip,
    CodeBlock,
    SearchTopics,
    TechnologyTabs,
    TopicList,
    TopicsWrapper,
    PlaceHolder,
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    SharedModule,
    RouterModule,
    FormsModule 
  ]
})
export class DocumentationModule { }
