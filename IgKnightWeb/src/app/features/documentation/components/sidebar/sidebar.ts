import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentationService } from '../../services/documentation.service';
import { Topic } from '../../../../models/topic.model';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class Sidebar implements OnInit {
  technology: string = '';
  topics: Topic[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private docService: DocumentationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.technology = params['technology'] || '';
      if (this.technology) {
        this.docService.getTopics(this.technology).subscribe(data => {
          this.topics = data;
        });
      }
    });
  }

  navigateTo(slug: string) {
    this.router.navigate(['/documentation', this.technology, slug]);
  }
}
