export interface TechPreview {
  title: string;
  description: string;
  icon: string; // Lucide icon name
  route: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  students: string;
  buildOutcome: string;
  goal: string;
  tools: string[];
  badges: string[];
}


export const TECH_PREVIEWS: TechPreview[] = [
  {
    title: 'Full Stack Web',
    description: 'Master both front-end and back-end technologies for complete web development.',
    icon: 'Layers',
    route: '/documentation/fullstack',
    level: 'Advanced',
    students: '25k+',
    buildOutcome: 'Create a full-featured MERN stack app with authentication',
    goal: 'Become job-ready with complete web dev knowledge',
    tools: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    badges: ['🚀 Career-Ready', '🧪 Full-Stack']
  },
  {
    title: 'HTML',
    description: 'Learn the foundation of web pages using clean and semantic HTML.',
    icon: 'FileCode',
    route: '/documentation/html',
    level: 'Beginner',
    students: '20k+',
    buildOutcome: 'Design accessible and semantic webpages',
    goal: 'Understand page structure and layout basics',
    tools: ['HTML5'],
    badges: ['👶 Beginner-Friendly', '🧠 Core Concepts']
  },
  {
    title: 'CSS',
    description: 'Style your websites with modern layouts, animations, and responsive design.',
    icon: 'Palette',
    route: '/documentation/css',
    level: 'Beginner',
    students: '18k+',
    buildOutcome: 'Build responsive, animated UI components',
    goal: 'Master layout, Flexbox, Grid, and animations',
    tools: ['CSS3', 'Tailwind'],
    badges: ['🎨 UI Design', '🧪 Hands-On']
  },
  {
    title: 'JavaScript',
    description: 'Add logic and interactivity with the most popular scripting language for the web.',
    icon: 'Code2',
    route: '/documentation/js',
    level: 'Intermediate',
    students: '30k+',
    buildOutcome: 'Build interactive components and fetch APIs',
    goal: 'Grasp DOM, events, async logic, and ES6+',
    tools: ['JavaScript', 'DOM', 'Fetch API'],
    badges: ['💡 Dynamic Logic', '🧪 Projects Included']
  },
  {
    title: 'TypeScript',
    description: 'Upgrade your JavaScript with powerful type safety and developer tooling.',
    icon: 'Type',
    route: '/documentation/ts',
    level: 'Intermediate',
    students: '15k+',
    buildOutcome: 'Refactor apps with types & interfaces',
    goal: 'Understand strong typing and advanced tooling',
    tools: ['TypeScript', 'tsconfig', 'Interfaces'],
    badges: ['🛡️ Type-Safe', '🧠 Code Clarity']
  },
  {
    title: '.NET',
    description: 'Build enterprise-grade applications using the .NET ecosystem and C#.',
    icon: 'Server',
    route: '/documentation/dotnet',
    level: 'Advanced',
    students: '12k+',
    buildOutcome: 'Create robust APIs and backend services',
    goal: 'Master enterprise backend and architecture',
    tools: ['C#', '.NET Core', 'EF Core'],
    badges: ['🏢 Enterprise Dev', '🧪 Backend Projects']
  },
  {
    title: 'C#',
    description: 'Learn a versatile, object-oriented language used in web, desktop, and game development.',
    icon: 'Braces',
    route: '/documentation/csharp',
    level: 'Intermediate',
    students: '11k+',
    buildOutcome: 'Build desktop or console-based apps',
    goal: 'Understand OOP with C# fundamentals',
    tools: ['C#', '.NET CLI'],
    badges: ['🧠 OOP Concepts', '🧪 Language Practice']
  },
  {
    title: 'Python',
    description: 'Write clean, readable code for automation, data science, and backend development.',
    icon: 'TerminalSquare',
    route: '/documentation/python',
    level: 'Beginner',
    students: '22k+',
    buildOutcome: 'Create scripts and small backend projects',
    goal: 'Automate tasks and write clean logic',
    tools: ['Python', 'pip', 'Flask'],
    badges: ['🐍 Versatile Language', '👶 Beginner-Friendly']
  }
];
