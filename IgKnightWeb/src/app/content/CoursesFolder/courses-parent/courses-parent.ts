import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-parent',
  standalone: false,
  templateUrl: './courses-parent.html',
  styleUrl: './courses-parent.scss'
})
export class CoursesParent {
    showCourses = true;
    isPageDisabled = true;
}
