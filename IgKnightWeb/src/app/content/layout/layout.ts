import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { filter } from 'rxjs';
import { RequestContextService } from '../../core/services/request.context';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
    currentPath: string = '';
    currentYear: number = new Date().getFullYear();
    isUserCanAccessAdminPanel: boolean = false;
    /**
     *
     */
    constructor(private route: ActivatedRoute, private router: Router, private requestContext: RequestContextService) 
    {
      this.isUserCanAccessAdminPanel = this.requestContext.canAccessAdminPanel();
    }

    ngOnInit(): void {
    // Set the initial path
    this.currentPath = this.router.url;

    // Subscribe to route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentPath = event.urlAfterRedirects;
      });
  }

  isActive(path: string): boolean {
    return this.currentPath === path;
  }
}
