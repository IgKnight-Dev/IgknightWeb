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

import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
