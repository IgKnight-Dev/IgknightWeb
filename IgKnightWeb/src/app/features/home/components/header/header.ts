import { Component, OnInit } from '@angular/core';
import { jwtDecode, JwtPayload }   from 'jwt-decode';
import { RequestContextService } from '../../../../core/services/request.context';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  isLoggedIn = false;
  privileges: string[] = [];
  features: string[] = [];
  
  constructor(private requestContext: RequestContextService) {} 

  ngOnInit(): void {
    const token = localStorage.getItem('access_token');
    this.isLoggedIn = this.requestContext.isLoggedIn;
  }
}
