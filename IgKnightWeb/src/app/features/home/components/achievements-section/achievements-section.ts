import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements-section',
  standalone: false,
  templateUrl: './achievements-section.html',
  styleUrl: './achievements-section.scss'
})
export class AchievementsSection {
  progressPercent: number = 30;  // Example: set to 75% or your dynamic value
}
