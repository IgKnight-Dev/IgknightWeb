import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice-home',
  standalone: false,
  templateUrl: './practice-home.html',
  styleUrl: './practice-home.scss'
})
export class PracticeHome {
  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
