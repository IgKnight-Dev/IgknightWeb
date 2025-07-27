import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-detail',
  standalone: false,
  templateUrl: './feedback-detail.html',
  styleUrl: './feedback-detail.scss'
})
export class FeedbackDetail {
  @Input() feedback: any;
  response: string = '';
}
