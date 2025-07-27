import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technology-practice',
  standalone: false,
  templateUrl: './technology-practice.html',
  styleUrl: './technology-practice.scss'
})
export class TechnologyPractice {
    constructor(private router: Router) {}

  technologies = [
    {
      name: 'HTML',
      slug: 'html',
      icon: 'lucide lucide-code-2',
      desc: 'Tags, structure, and layout practice',
    },
    {
      name: 'CSS',
      slug: 'css',
      icon: 'lucide lucide-paintbrush',
      desc: 'Styling, flexbox, grid and more',
    },
    {
      name: 'JavaScript',
      slug: 'javascript',
      icon: 'lucide lucide-bug-play',
      desc: 'ES6, DOM, functions, and logic',
    },
    {
      name: 'TypeScript',
      slug: 'typescript',
      icon: 'lucide lucide-file-code-2',
      desc: 'Types, interfaces, and OOP in TS',
    },
    {
      name: 'Python',
      slug: 'python',
      icon: 'lucide lucide-rocket',
      desc: 'Syntax, logic, and data structures',
    },
    {
      name: '.NET',
      slug: 'dotnet',
      icon: 'lucide lucide-server-cog',
      desc: 'C#, ASP.NET Core backend practice',
    },
    {
      name: 'C#',
      slug: 'csharp',
      icon: 'lucide lucide-terminal',
      desc: 'OOP, LINQ, and async logic',
    },
  ];

  goToAssignments(tech: string) {
    this.router.navigate(['/practice/all-assignments'], {
      queryParams: { tech }
    });
  }
}
