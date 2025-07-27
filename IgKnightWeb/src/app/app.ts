// src/main.ts
(self as any).MonacoEnvironment = {
  getWorkerUrl: function (moduleId: string, label: string) {
    const base = '/assets/monaco/min';
    return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
      self.MonacoEnvironment = { baseUrl: '${base}' };
      importScripts('${base}/vs/base/worker/workerMain.js');
    `)}`;
  }
};


import { Component } from '@angular/core';
import { TokenService } from './core/services/token.service';

declare const window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'IgKnightWeb';
  
  constructor(private authService: TokenService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('access_token');
    if (token) {
      this.authService.setAccessToken(token); // Restore auth state
    }

    // ✅ Correctly assign MonacoEnvironment here
    // (window as any).MonacoEnvironment = {
    //   getWorkerUrl: function (moduleId: string, label: string) {
    //     if (label === 'json') {
    //       return './assets/monaco/min/vs/language/json/json.worker.js';
    //     }
    //     if (label === 'css' || label === 'scss' || label === 'less') {
    //       return './assets/monaco/min/vs/language/css/css.worker.js';
    //     }
    //     if (label === 'html' || label === 'handlebars' || label === 'razor') {
    //       return './assets/monaco/min/vs/language/html/html.worker.js';
    //     }
    //     if (label === 'typescript' || label === 'javascript') {
    //       return './assets/monaco/min/vs/language/typescript/ts.worker.js';
    //     }
    //     return './assets/monaco/min/vs/editor/editor.worker.js';
    //   }
    // };
  }
}
