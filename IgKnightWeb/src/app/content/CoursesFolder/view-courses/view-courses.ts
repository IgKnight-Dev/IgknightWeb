import { Component } from '@angular/core';
import { Course } from '../../course-model';

@Component({
  selector: 'app-view-courses',
  standalone: false,
  templateUrl: './view-courses.html',
  styleUrl: './view-courses.scss'
})
export class ViewCourses {
    courses: Course[] = [
        {
          id: 'A-001',
          title: 'HTML',
          description: 'Basic HTML structure and elements',
          category: 'Web Development',
          status: 'Published',
          topics: 5,
        },
        {
          id: 'A-002',
          title: 'CSS Flexbox',
          description: 'Apply modern layouts using Flexbox',
          category: 'Web Development',
          status: 'Draft',
          topics: 3,
        },
        {
          id: 'A-001',
          title: 'JavaScript Basics',
          description: 'Learn variables, loops, and functions',
          category: 'Programming',
          status: 'Published',
          topics: 8,
        },
        {
          id: 'A-001',
          title: 'TypeScript Interfaces',
          description: 'Define object shapes and contracts',
          category: 'Programming',
          status: 'Draft',
          topics: 4,
        },
    ];
}
