import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-motivation-card',
  standalone: false,
  templateUrl: './motivation-card.html',
  styleUrl: './motivation-card.scss'
})
export class MotivationCard {
  @Input() name!: string;
  @Input() title!: string;
  @Input() quote!: string;
  @Input() points!: string[];
  @Input() cta!: string;
  @Input() imagePosition: 'left' | 'right' = 'right';

  constructor(private router: Router) {}
  startYourJourney() {
    this.router.navigate(['/documentation/fullstack']);
  }
}
