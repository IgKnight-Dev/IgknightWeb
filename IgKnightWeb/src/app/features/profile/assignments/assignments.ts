import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-assignments',
  standalone: false,
  templateUrl: './assignments.html',
  styleUrl: './assignments.scss'
})
export class Assignments {
  @Input() assignments: { title: string; score: number; total: number }[] = [];
}
