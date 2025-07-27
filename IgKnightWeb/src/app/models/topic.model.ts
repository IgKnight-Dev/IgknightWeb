export interface Topic {
  id: string;  // unique identifier for the topic
  title: string;
  slug: string;  // used for URL routing
}

export interface TopicContent {
  slug: string;
  title: string;
  description?: string;
  content: string;  // This can be markdown or raw HTML
  proTip?: string;
  codeSamples?: CodeSample[];
  tryEditorCode?: string;        // New field for default editor code
  tryEditorLanguage?: 'html' | 'css' | 'javascript';  // New field for language
}

export interface CodeSample {
  language: string;
  code: string;
}
