import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowLeft, LucideAngularModule } from 'lucide-angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LucideAngularModule,
  ],
  exports: [
    CommonModule,
    LucideAngularModule
  ]
})
export class SharedModule { }
