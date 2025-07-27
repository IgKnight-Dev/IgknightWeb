import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  standalone: false,
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.scss'
})
export class HomeHero {
  /**
   *
   */
  constructor(private router: Router) {}

  navigateToCourses() : void{
    this.router.navigate(['/documentation/fullstack']);
  }

  navigateToAssignments(): void{
    this.router.navigate(['/practice/assignments']);
  }
}
