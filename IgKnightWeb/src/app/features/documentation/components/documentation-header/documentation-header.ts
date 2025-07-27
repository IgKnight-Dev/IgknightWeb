import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-documentation-header',
  standalone: false,
  templateUrl: './documentation-header.html'
})
export class DocumentationHeader {
  @Input() techDoc!: {
    title: string;
    description: string;
    icon: string;
    level: string;
  };
}
