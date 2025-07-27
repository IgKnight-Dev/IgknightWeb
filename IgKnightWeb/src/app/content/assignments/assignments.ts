import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments',
  standalone: false,
  templateUrl: './assignments.html',
  styleUrl: './assignments.scss'
})
export class Assignments {
    showAssignments = true;
    // In your assignment.component.ts
    selectedTab: 'create' | 'questions' | 'manage' = 'create';
}
