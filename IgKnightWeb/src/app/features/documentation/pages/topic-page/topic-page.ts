import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DocumentationService } from '../../services/documentation.service';
import hljs from 'highlight.js';
import { TopicContent } from '../../../../models/topic.model';

@Component({
  selector: 'app-topic-page',
  standalone: false,
  templateUrl: './topic-page.html',
})
export class TopicPage implements OnInit, AfterViewInit {
  technology!: string;
  slug?: string;  // notice this is now optional
  topicContent?: TopicContent;
  copiedIndex: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private documentationService: DocumentationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.technology = params['technology'];
      this.slug = params['slug'];  // may be undefined
      this.topicContent = undefined; // Clear before loading new
      if (this.slug) {
        this.loadContent();
      } else {
        this.slug = this.technology + '-introduction'; // Default slug if none provided
        this.router.navigate(['/documentation', this.technology, this.slug]);
        this.loadContent();
      }
    });
  }

  loadContent() {
  this.topicContent = undefined; // Clear old content
  this.documentationService.getTopicContent(this.technology, this.slug!)
    .subscribe(content => {
      this.topicContent = content;
      setTimeout(() => this.highlightCode(), 0);
    });
}


  navigateToTryEditor() {
    this.router.navigate(['/try-editor', this.technology]);
  }

  copyCode(code: string, index: number) {
  navigator.clipboard.writeText(code).then(() => {
    this.copiedIndex = index;
    setTimeout(() => {
      this.copiedIndex = null;
    }, 1000); // Revert button text after 3 seconds
  });
}


  ngAfterViewInit(): void {
    this.highlightCode();
  }

  highlightCode() {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
    });
  }
}
