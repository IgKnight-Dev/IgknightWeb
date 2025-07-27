import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentDto, AssignmentsOverviewDataDto } from '../../../../models/assignment.model';
import { GuestAssignmentApiService } from '../../../../content/services/guest-api.service';
import { Technologies } from '../../../../models/Enums';

@Component({
  selector: 'app-popular-practice',
  standalone: false,
  templateUrl: './popular-practice.html',
  styleUrl: './popular-practice.scss'
})
export class PopularPractice {
  popularSets?: AssignmentsOverviewDataDto[] = [];
  technologies = Object.keys(Technologies).filter(key => isNaN(Number(key)));;

  constructor(private router: Router, private gustApiService: GuestAssignmentApiService) {}

  ngOnInit(): void {
    this.loadPopularSets();
  }

  async loadPopularSets(): Promise<void> {
    this.popularSets = await this.gustApiService.getAllAssignments();
  }

  popularSetsDto = [
    {
      id: 'html-css-01',
      title: 'HTML & CSS Basics',
      technology: 'HTML/CSS',
      description: 'Practice HTML tags, forms, and CSS styling rules.'
    },
    {
      id: 'js-loops-02',
      title: 'JavaScript Loops Mastery',
      technology: 'JavaScript',
      description: 'Practice for, while, and loop-related challenges.'
    },
    {
      id: 'python-ds-03',
      title: 'Python Data Structures',
      technology: 'Python',
      description: 'Work on lists, dicts, sets, and real-world scenarios.'
    },
    {
      id: 'ts-types-04',
      title: 'TypeScript Types & Interfaces',
      technology: 'TypeScript',
      description: 'Practice writing safe, typed code with interfaces and types.'
    },
  ];

  startQuiz(item: AssignmentsOverviewDataDto): void {
    if(item.id != null && item.id !== undefined ) {
    this.router.navigate(['/practice/assignment', item.id]);
  }
}
}
