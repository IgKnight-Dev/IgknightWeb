import { Component, OnChanges, OnInit } from '@angular/core';
import { UserApiService } from '../services/user-api.service';
import { UserDto } from '../../../models/UserDto ';
import { RequestContextService } from '../../../core/services/request.context';

@Component({
  selector: 'app-profile-page',
  standalone: false,
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss'
})
export class ProfilePage implements OnInit, OnChanges {
  selectedTab: 'user-details' | 'assignments' | 'saved-code' = 'user-details';
  isAuthorized = false;

  user: UserDto & { profilePic: string } = {
    userId: '',
    userName: '',
    email: '',
    profilePic: ''
  };

  private cartoonAvatars = [
  'https://api.dicebear.com/7.x/lorelei/svg?seed=alpha',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=beta',
  'https://api.dicebear.com/7.x/notionists/svg?seed=gamma',
  'https://api.dicebear.com/7.x/adventurer/svg?seed=delta',
];


  assignments = [
    { title: 'HTML Basics Quiz', score: 8, total: 10 },
    { title: 'CSS Challenge', score: 15, total: 20 },
  ];

  savedCode = [
    { language: 'HTML', filename: 'index.html', content: '<h1>Hello World</h1>' },
    { language: 'CSS', filename: 'style.css', content: 'body { background: #fff; }' },
    { language: 'JavaScript', filename: 'app.js', content: 'console.log("Hi IgKnight!");' },
  ];

  constructor(private userApiService: UserApiService, private ruequestContext: RequestContextService) {}

  ngOnInit(): void {
    this.loadUserProfile();
    console.log('Request Context:', this.ruequestContext.privileges);
  }

  ngOnChanges(): void {
    this.loadUserProfile();
  }

  async loadUserProfile(): Promise<void> {
  try {
    const userData = await this.userApiService.getUserProfile();
    if (!userData || !userData.userId) {
      this.isAuthorized = false;
      return;
    }

    const randomAvatar = this.getRandomAvatar();
    this.user = {
      ...userData,
      profilePic: randomAvatar
    };
    this.isAuthorized = true;
  } catch (error) {
    this.isAuthorized = false;
  }
}

  getRandomAvatar(): string {
    const index = Math.floor(Math.random() * this.cartoonAvatars.length);
    return this.cartoonAvatars[index];
  }

  selectTab(tab: 'user-details' | 'assignments' | 'saved-code') {
    this.selectedTab = tab;
  }
}
