import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { Home } from './pages/home/home';
import { HomeHero } from './components/home-hero/home-hero';
import { FeatureHighlights } from './components/feature-highlights/feature-highlights';
import { TechPreviewGrid } from './components/tech-preview-grid/tech-preview-grid';
import { HomeFooter } from './components/home-footer/home-footer';
import { Header } from './components/header/header';
import { PracticeSection } from './components/practice-section/practice-section';
import { AchievementsSection } from './components/achievements-section/achievements-section';
import { LucideAngularModule } from 'lucide-angular';


@NgModule({
  declarations: [
    Home,
    HomeHero,
    FeatureHighlights,
    HomeFooter,
    TechPreviewGrid,
    Header,
    PracticeSection,
    AchievementsSection,
  ],
  exports: [
      Home
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LucideAngularModule
  ]
})
export class HomeModule { }
