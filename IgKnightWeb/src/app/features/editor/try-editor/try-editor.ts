import { Component, HostListener } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-try-editor',
  standalone: false,
  templateUrl: './try-editor.html',
  styleUrls: ['./try-editor.scss']
})
export class TryEditor {
  languages = ['HTML', 'CSS', 'JavaScript'];
  selectedLanguage = 'HTML';

  htmlCode: string = `
  <h1>IgKnight Try Editor</h1>
  <p>Hello World!</p>
  <button onclick="changeText()">Click Me</button>
`;

cssCode: string = `
  body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    color: #333;
  }

  button {
    padding: 10px 20px;
    background-color: #ff6600;
    color: white;
    border: none;
    border-radius: 5px;
  }
`;

jsCode: string = `
  function changeText() {
    console.log('Hey There');
    alert('You clicked the button!');
    const para = document.querySelector('p');
    if (para) {
      para.textContent = '🚀 Keep learning with IgKnight!';
    }
  }
`;

  output: SafeHtml = '';
  consoleLogs: string[] = [];

  autoRun: boolean = true;
  showConsole: boolean = true;

  private debounceTimer: any;

  constructor(private sanitizer: DomSanitizer) {
    this.runCode();
  }

  runCode() {
    this.consoleLogs = [];
    // Move console override OUTSIDE of IIFE, so JS functions work globally
    const consoleOverrideScript = `
      const logs = [];
      const originalLog = console.log;
      console.log = function(...args) {
        logs.push(args.join(" "));
        originalLog.apply(console, args);
        window.parent.postMessage({ type: 'console', data: logs.join('\\n') }, '*');
      };
    `;

    const completeCode = `
      <html>
        <head>
          <style>${this.cssCode}</style>
        </head>
        <body>
          ${this.htmlCode}
          <script>
            ${consoleOverrideScript}
            try {
              ${this.jsCode}
            } catch (err) {
              console.log(err.message);
            }
          </script>
        </body>
      </html>
    `;

    this.output = this.sanitizer.bypassSecurityTrustHtml(completeCode);
  }

  clearCode() {
    this.htmlCode = '';
    this.cssCode = '';
    this.jsCode = '';
    this.consoleLogs = [];
    this.runCode();
  }

  saveCode() {
    const codeData = {
      html: this.htmlCode,
      css: this.cssCode,
      js: this.jsCode
    };
    localStorage.setItem('savedCode', JSON.stringify(codeData));
    alert("Code saved successfully!");
  }

  loadSavedCode() {
    const saved = localStorage.getItem('savedCode');
    if (saved) {
      const codeData = JSON.parse(saved);
      this.htmlCode = codeData.html || '';
      this.cssCode = codeData.css || '';
      this.jsCode = codeData.js || '';
      this.onCodeChange(); // re-render preview
    }
  }

  @HostListener('window:message', ['$event'])
  onMessage(event: MessageEvent) {
    if (event.data.type === 'console') {
      this.consoleLogs = event.data.data.split('\n');
    }
  }

  // Auto Run with debounce on model change
  onCodeChange() {
    if (this.autoRun) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        this.runCode();
      }, 500);
    }
  }
}
