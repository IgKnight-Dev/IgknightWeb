import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss'
})
export class UserDetails {
  @Input() user!: { userName: string; email: string; profilePic: string };
}
