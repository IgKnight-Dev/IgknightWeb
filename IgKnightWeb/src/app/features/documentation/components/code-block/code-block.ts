import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';
import hljs from 'highlight.js';

@Component({
  selector: 'app-code-block',
  standalone: false,
  templateUrl: './code-block.html',
  styleUrls: ['./code-block.scss']
})
export class CodeBlock implements AfterViewInit {
  @Input() language: string = '';
  @Input() code: string = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    hljs.highlightElement(this.el.nativeElement.querySelector('pre code'));
  }

  copyCode() {
    navigator.clipboard.writeText(this.code);
    alert('Code copied!');
  }
}
