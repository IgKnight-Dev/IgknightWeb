import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-oauth-callback',
  standalone: false,
  templateUrl: './oauth-callback.html',
  styleUrl: './oauth-callback.scss'
})
export class OauthCallback implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');
    const email = this.route.snapshot.queryParamMap.get('email');

    if (token) {
      localStorage.setItem('access_token', token);
      // You can store email or fetch user details with the token if needed
      this.router.navigate(['/']); // Redirect after storing token
    } else {
      // Redirect to login if no token
      this.router.navigate(['/login']);
    }
  }
}
