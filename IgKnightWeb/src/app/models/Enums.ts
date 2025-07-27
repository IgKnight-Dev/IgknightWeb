export enum RecipientType {
  Email = 1,
  Phone = 2,
  // add more if needed
}

export enum Technology {
  HTML = 'html',
  CSS = 'css',
  JavaScript = 'js',
  TypeScript = 'ts',
  Python = 'python',
  DotNet = 'dotnet',
  CSharp = 'csharp'
}

export enum Technologies {
  HTML = 0,
  CSS = 1,
  JavaScript = 2,
  TypeScript = 3,
  Python = 4,
  DotNet = 5,
  CSharp = 6
}

export enum Status{
  Published = 0,
  Draft = 1,
}

export enum DifficultyLevel {
  Easy = 0,
  Medium = 1,
  Hard = 2
}

export enum CodingQuestionCategory {
  Array = 0,
  String = 1,
  HashMap = 2,
  LinkedList = 3,
  Stack = 4,
  Queue = 5,
  BinaryTree = 6,
  Graph = 7,
  Recursion = 8,
  DynamicProgramming = 9,
  Greedy = 10,
  TwoPointers = 11,
  SlidingWindow = 12,
  Sorting = 13,
  Searching = 14,
  BitManipulation = 15,
  Math = 16,
  Backtracking = 17
}

export const difficultyMap = {
      [DifficultyLevel.Easy]: { label: 'Easy', class: 'bg-green-300 text-green-700' },
      [DifficultyLevel.Medium]: { label: 'Medium', class: 'bg-yellow-100 text-yellow-700' },
      [DifficultyLevel.Hard]: { label: 'hard', class: 'bg-red-100 text-red-600' },
    };

export const categoryMap = {
  [CodingQuestionCategory.Array]: { label: 'Array' },
  [CodingQuestionCategory.String]: { label: 'String' },
  [CodingQuestionCategory.HashMap]: { label: 'HashMap' },
  [CodingQuestionCategory.LinkedList]: { label: 'Linked List' },
  [CodingQuestionCategory.Stack]: { label: 'Stack' },
  [CodingQuestionCategory.Queue]: { label: 'Queue' },
  [CodingQuestionCategory.BinaryTree]: { label: 'Binary Tree' },
  [CodingQuestionCategory.Graph]: { label: 'Graph' },
  [CodingQuestionCategory.Recursion]: { label: 'Recursion' },
  [CodingQuestionCategory.DynamicProgramming]: { label: 'Dynamic Programming' },
  [CodingQuestionCategory.Greedy]: { label: 'Greedy' },
  [CodingQuestionCategory.TwoPointers]: { label: 'Two Pointers' },
  [CodingQuestionCategory.SlidingWindow]: { label: 'Sliding Window' },
  [CodingQuestionCategory.Sorting]: { label: 'Sorting' },
  [CodingQuestionCategory.Searching]: { label: 'Searching' },
  [CodingQuestionCategory.BitManipulation]: { label: 'Bit Manipulation' },
  [CodingQuestionCategory.Math]: { label: 'Math' },
  [CodingQuestionCategory.Backtracking]: { label: 'Backtracking' },
};


export const TechnologyDescriptions: Record<string, string> = {
  [Technology.HTML]: 'Learn the building blocks of the web - HTML.',
  [Technology.CSS]: 'Master styling with modern CSS.',
  [Technology.JavaScript]: 'Become proficient in JavaScript coding.',
  [Technology.TypeScript]: 'Level up your skills with TypeScript.',
  [Technology.Python]: 'Explore Python programming.',
  [Technology.DotNet]: '.NET framework development.',
  [Technology.CSharp]: 'Deep dive into C# language.'
};


export enum TabType {
  Description = 'DESCRIPTION',
  Editor = 'EDITOR',
  Solution = 'SOLUTION',
}

