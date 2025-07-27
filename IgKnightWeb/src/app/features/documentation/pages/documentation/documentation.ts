import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Params } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TechnologyDescriptions } from '../../../../models/Enums';

@Component({
  selector: 'app-documentation',
  standalone: false,
  templateUrl: './documentation.html',
  styleUrls: ['./documentation.scss']
})
export class Documentation implements OnInit, OnChanges {

  selectedTechnology: string = '';
  description: string = '';
  currentYear: number = new Date().getFullYear();

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe(() => {
    const tech = this.route.snapshot.firstChild?.paramMap.get('technology') || '';
    this.selectedTechnology = tech;
    this.description = TechnologyDescriptions[this.selectedTechnology];

});

  // fallback if no param found from parent directly
  this.route.firstChild?.params.subscribe(params => {
    if (params['technology']) {
      this.selectedTechnology = params['technology'];
      this.description = TechnologyDescriptions[this.selectedTechnology];
    }
  });
}
ngOnChanges(): void {
  this.route.params.subscribe(params => {
    this.selectedTechnology = params['technology'] || '';
    this.description = TechnologyDescriptions[this.selectedTechnology];

  });

  // fallback if no param found from parent directly
  this.route.firstChild?.params.subscribe(params => {
    if (params['technology']) {
      this.selectedTechnology = params['technology'];
      this.description = TechnologyDescriptions[this.selectedTechnology];
    }
  });
}
}
