import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technology-tabs',
  standalone: false,
  templateUrl: './technology-tabs.html'
})
export class TechnologyTabs {
  technologies = [
  { name: 'Fullstack', path: 'fullstack' },
  { name: 'HTML', path: 'html' },
  { name: 'CSS', path: 'css' },
  { name: 'JavaScript', path: 'js' },
  { name: 'TypeScript', path: 'ts' },
  { name: '.NET', path: 'dotnet' },
  { name: 'Python', path: 'python' },
  { name: 'C#', path: 'csharp' }
];

  constructor(private router: Router) {}

  selectTechnology(slug: string) {
    this.router.navigate(['/documentation', slug]);
  }
}
