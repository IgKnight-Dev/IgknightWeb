import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TryEditor } from './try-editor/try-editor';

const routes: Routes = [
  {
    path: '',
    component: TryEditor
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
