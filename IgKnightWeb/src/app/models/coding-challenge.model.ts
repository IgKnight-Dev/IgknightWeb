export interface CodingChallenge {
  id: string;
  title: string;
  slug: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string; // e.g. 'Arrays', 'Dynamic Programming'
  acceptance: number; // in percentage (e.g., 87.6)
  likes: number;
  languageTemplates: {
    [language: string]: string; // e.g., { "python": "def solve():\n  pass" }
  };
  sampleInput?: string;
  sampleOutput?: string;
  constraints?: string;
  hints?: string[];
}
