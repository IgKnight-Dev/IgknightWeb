import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saved-code',
  standalone: false,
  templateUrl: './saved-code.html',
  styleUrl: './saved-code.scss'
})
export class SavedCode {
  @Input() savedCode: { language: string; filename: string; content: string }[] = [];
}
