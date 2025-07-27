import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-topics-wrapper',
  standalone: false,
  templateUrl: './topics-wrapper.html',
  styleUrls: ['./topics-wrapper.scss']
})
export class TopicsWrapper implements OnInit {

  technology!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.technology = params['technology'];
    });
  }
}
