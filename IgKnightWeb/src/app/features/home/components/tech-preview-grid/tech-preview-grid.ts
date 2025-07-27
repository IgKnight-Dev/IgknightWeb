import { Component , ViewChild, ElementRef, Input } from '@angular/core';
import { TECH_PREVIEWS, TechPreview } from '../../data/tech-preview.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tech-preview-grid',
  templateUrl: './tech-preview-grid.html',
  styleUrl: './tech-preview-grid.scss',
  standalone: false,
})
export class TechPreviewGrid {
    @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
    techPreviews: TechPreview[] = TECH_PREVIEWS;
  constructor(private router: Router) {}
  
  showLeftArrow = false;
  showRightArrow = false;

  ngAfterViewInit(): void {
    this.checkScroll();
  }

  scrollLeft(): void {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  checkScroll(): void {
    const el = this.scrollContainer.nativeElement;
    this.showLeftArrow = el.scrollLeft > 0;
    this.showRightArrow = el.scrollLeft + el.clientWidth < el.scrollWidth;
  }

  navigateToCourses(track: TechPreview): void {
    this.router.navigate([track.route]);
  }

  getBadgeColor(level: string): string {
  switch (level.toLowerCase()) {
    case 'beginner':
      return 'text-green-400 border-green-400';
    case 'intermediate':
      return 'text-orange-400 border-orange-400';
    case 'advanced':
      return 'text-red-400 border-red-400';
    default:
      return 'text-slate-400 border-slate-400';
  }
}
}
