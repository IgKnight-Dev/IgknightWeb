import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotivationRoutingModule } from './motivation-routing-module';
import { MotivationPage } from './components/motivation.page/motivation.page';
import { MotivationCard } from './components/motivation-card/motivation-card';
import { MotivationHeader } from './components/motivation-header/motivation-header';


@NgModule({
  declarations: [
    MotivationPage,
    MotivationCard,
    MotivationHeader
  ],
  imports: [
    CommonModule,
    MotivationRoutingModule
  ]
})
export class MotivationModule { }
