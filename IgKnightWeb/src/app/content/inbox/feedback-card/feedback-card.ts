import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-card',
  standalone: false,
  templateUrl: './feedback-card.html',
  styleUrl: './feedback-card.scss'
})
export class FeedbackCard {
  @Input() feedback: any;
  @Input() active: boolean = false;
}
