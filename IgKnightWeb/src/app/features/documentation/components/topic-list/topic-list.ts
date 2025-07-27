import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { DocumentationService } from '../../services/documentation.service';
import { Topic } from '../../../../models/topic.model';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-topic-list',
  standalone: false,
  templateUrl: './topic-list.html',
})
export class TopicList implements OnInit, OnChanges {

  @Input() technology: string = '';
  topics: Topic[] = [];
  selectedSlug: string = '';

  constructor(
    private documentationService: DocumentationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.technology) {
        this.topics = []; // Clear topics initially];
      this.loadTopics();
    }

    this.route.params.subscribe((params: Params) => {
      this.selectedSlug = params['slug'] || '';
    });

    this.route.parent?.params.subscribe((params: Params) => {
      if (params['slug']) {
        this.selectedSlug = params['slug'];
      }
    });
    
    if(!this.technology) {
      this.technology = 'html' // Default technology if none provided
    }

    if(!this.selectedSlug) {
      this.selectedSlug = this.technology + '-introduction'; // Default slug if none provided
      this.router.navigate(['/documentation', this.technology, this.selectedSlug]);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedSlug = this.technology + '-introduction'; // Default slug if none provided
    if (changes['technology']) {
      this.loadTopics();
    }
  }

  navigateToTopic(slug: string) {
    if (!this.technology) {
      return;
    }
    this.selectedSlug = slug;
    this.router.navigate(['/documentation', this.technology, slug]);
  }

  private loadTopics(): void {
    this.documentationService.getTopics(this.technology).subscribe(data => {
      this.topics = data;
    });
  }
}
