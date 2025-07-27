import { Component } from '@angular/core';
import { RequestContextService } from '../../../core/services/request.context';

@Component({
  selector: 'app-coding-challenges-header',
  standalone: false,
  templateUrl: './coding-challenges-header.html',
  styleUrl: './coding-challenges-header.scss'
})
export class CodingChallengesHeader {
    isLoggedIn: boolean = false;
      constructor(private requestContext: RequestContextService) {
        this.isLoggedIn = this.requestContext.isLoggedIn;    
      }
}
