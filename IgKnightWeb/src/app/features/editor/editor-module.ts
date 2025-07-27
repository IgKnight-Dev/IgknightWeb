import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing-module';
import { TryEditor } from './try-editor/try-editor';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TryEditor
  ],
  imports: [
    CommonModule,
    EditorRoutingModule,
    FormsModule
  ]
})
export class EditorModule { }
