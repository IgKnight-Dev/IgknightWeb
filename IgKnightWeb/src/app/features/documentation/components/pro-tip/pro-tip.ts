import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pro-tip',
  standalone: false,
  templateUrl: './pro-tip.html',
  styleUrls: ['./pro-tip.scss']
})
export class ProTip {
  @Input() tip: string = 'Hey There! This is a pro tip.';
}
