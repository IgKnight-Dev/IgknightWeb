import { Component } from '@angular/core';
import { CodeRunnerApiService } from '../../services/code-runner-api.service';
import { ActivatedRoute } from '@angular/router';
import { TestResultDto } from '../../models/coding-question.model';
import * as monaco from 'monaco-editor';

@Component({
  selector: 'app-editor-pane',
  standalone: false,
  templateUrl: './editor-pane.html',
  styleUrls: ['./editor-pane.scss'],
})
export class EditorPane {
  language = 'python';
  code = '';
  output = '';
  questionId: string | null = null;
  testResults!: TestResultDto[];
  totalCount: number = 0;
  passCount: number = 0;
  isRunning = false;
  errorMessage: string = '';
  private monacoEditor!: monaco.editor.IStandaloneCodeEditor;
  defaultComments: Record<string, string> = {
  c: `// 🚀 Implement only the function below — no need to write main().
/*
int main() {
    // 🧪 We prepare inputs and call your function here.
    // 🖨️ Output is handled behind the scenes.
    // 📝 Pass all the required inputs as input params in function.
    return 0;
}
*/

// ↓ Now write your function below this line:`,

  cpp: `// 🚀 Write only the function — skip main() or includes.
/*
int main() {
    // 🧪 We automatically run your function with test inputs.
    // 🖨️ Results are printed on our end.
    // 📝 Pass all required inputs as parameters in the function.
    return 0;
}
*/

// ↓ Now write your function below this line:`,

  python: `# 🚀 Just write the function definition — no input(), print(), or main check.
/*
if __name__ == '__main__':
    # 🧪 We call your function and handle output automatically.
    # 🖨️ Results are displayed from our side.
    # 📝 Pass all required inputs as parameters in the function.
*/
# ↓ Start your function definition below this line:`,

  java: `// 🚀 Define only the method — no need to include class or main().
/*
class Main {
    public static void main(String[] args) {
        // 🧪 We call your method with test inputs.
        // 🖨️ Result is displayed from our side.
        // 📝 Pass all required inputs as parameters in the method.
    }
}
*/

// ↓ Write your method below this line:`,
};



  editorOptions = {
    language: this.language,
    theme: 'vs-dark',
    automaticLayout: true,
    fontSize: 14,
    minimap: { enabled: false },
    readOnly: false,
  };

  constructor(private codeRunnerApi: CodeRunnerApiService, private route: ActivatedRoute) {}

  ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.questionId = id;
  }

  // Preload guide comment as fallback before Monaco loads
  const initialComment = this.defaultComments[this.language];
  if (initialComment) {
    this.code = initialComment + '\n\n';
  }
}


  onEditorInit(editor: monaco.editor.IStandaloneCodeEditor) {
    this.monacoEditor = editor;

    monaco.editor.defineTheme('igknight-editor-theme', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#12171eff', // green background
        'editor.foreground': '#ffffff', // bright foreground
      },
    });

    monaco.editor.setTheme('igknight-editor-theme');
    this.setDefaultComment(this.language);
}

  setDefaultComment(language: string) {
  const comment = this.defaultComments[language];
  if (comment && this.monacoEditor) {
    this.monacoEditor.setValue(comment + '\n\n');
    this.monacoEditor.setPosition({ lineNumber: 3, column: 1 });
    this.monacoEditor.focus();
  }
}

  

  onLanguageChange(lang: string) {
    this.language = lang;
    this.editorOptions = {
      ...this.editorOptions,
      language: lang,
    };
  }

  async runCode() {
    if (!this.code || this.code.trim() === '') {
      this.testResults = [];
      this.totalCount = 0;
      this.passCount = 0;
      this.errorMessage = 'Function definition not found';
      this.isRunning = false;
      return;
    }

    this.isRunning = true;
    this.testResults = [];
    this.passCount = 0;
    this.totalCount = 0;
    this.errorMessage = '';

    try {
      
      this.testResults = await this.codeRunnerApi.runCode(
        {
          code: this.getCleanCode(),
          language: this.language,
        },
        this.questionId || ''
      );

      this.totalCount = this.testResults.length;
      this.passCount = this.testResults.filter((t) => t.pass).length;
    } catch (error: any) {
      if (error?.error?.detail) {
        this.errorMessage = error.error.detail;
      } else if (error?.detail) {
        this.errorMessage = error.detail;
      } else if (error?.message) {
        this.errorMessage = error.message;
      } else {
        this.errorMessage = 'An unknown error occurred';
      }

      this.testResults = [
        {
          id: 0,
          pass: false,
          isSample: true,
          sampleInput: '',
          expected: '',
        },
      ];
    } finally {
      this.isRunning = false;
    }
  }

  getCleanCode(): string {
  const comment = this.defaultComments[this.language];
  return this.code.replace(comment + '\n\n', '');
}

  resetCode() {
  const initialComment = this.defaultComments[this.language];
  if (initialComment) {
    this.code = initialComment + '\n\n';
  }    
  }

  copyCode() {
    navigator.clipboard.writeText(this.code);
  }

  expandEditor() {
  }

  openSettings() {
  }

  getExampleSnippet(lang: string): string {
  const samples: Record<string, string> = {
    python: `Code syntax:\ndef greet(name: str) -> str:\n    return f"Hello, {name}"`,
    java: `Code syntax:\npublic static String greet(String name) {\n    return "Hello, " + name;\n}`,
    c: `Code syntax:\nchar* greet(char* name) {\n    static char result[100];\n    sprintf(result, "Hello, %s", name);\n    return result;\n}`,
    cpp: `Code syntax:\nstring greet(string name) {\n    return "Hello, " + name;\n}`
  };

  return samples[lang] || '// No sample available';
}

}
