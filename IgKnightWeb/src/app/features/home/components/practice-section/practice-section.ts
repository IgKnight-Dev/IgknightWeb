import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-section',
  standalone: false,
  templateUrl: './practice-section.html',
  styleUrl: './practice-section.scss'
})
export class PracticeSection {
practiceItems = [
  { title: 'Quizzes', icon: 'check-circle', iconBg: 'bg-orange-500' },
  { title: 'Coding Challenges', icon: 'code', iconBg: 'bg-orange-500' },
  { title: 'Interview Prep', icon: 'help-circle', iconBg: 'bg-orange-500' }
];
}
