import { Component } from '@angular/core';
import { RequestContextService } from '../../../../core/services/request.context';

@Component({
  selector: 'app-practice-layout',
  standalone: false,
  templateUrl: './practice-layout.html',
  styleUrl: './practice-layout.scss'
})
export class PracticeLayout {
  isLoggedIn: boolean = false;
  constructor(private requestContext: RequestContextService) {
    this.isLoggedIn = this.requestContext.isLoggedIn;    
    console.log(this.isLoggedIn, requestContext.features);
  }
}
