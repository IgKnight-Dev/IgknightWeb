import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LucideAngularModule, BookOpen, Users as UsersIcon, TrendingUp, Trophy } from 'lucide-angular';
import { AssignmentApiService } from '../services/assignment-api.service';
import { AssignmentDto } from '../../models/assignment.model';
import { UserApiService } from '../../features/profile/services/user-api.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {

  currentYear: number = new Date().getFullYear();
  totalAssignments: AssignmentDto[] = [];
  assignmentCount: number = 0;
  totalUsers: number = 0;
  

  constructor(private router: Router, private assignmentApiService: AssignmentApiService, private userApiService: UserApiService) {}

  async ngOnInit(): Promise<void> {
    this.totalAssignments = await this.assignmentApiService.getAllAssignments();
    this.assignmentCount = this.totalAssignments.length;
    this.totalUsers = await this.userApiService.getTotalUsersCount();
  }
  navToAssignments(){
this.router.navigate(['/admin-panel/assignments']);
  }
}

