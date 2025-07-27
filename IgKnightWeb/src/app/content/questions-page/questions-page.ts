import { Component, OnInit } from '@angular/core';
import { AssignmentApiService } from '../services/assignment-api.service';
import { AssignmentDto } from '../../models/assignment.model';
import { Store } from '@ngrx/store';
import { selectPrivileges } from '../../core/services/auth.selectors';
import { RequestContextService } from '../../core/services/request.context';
import { Privileges } from '../../models/privileges.constant';

@Component({
  selector: 'app-questions-page',
  standalone: false,
  templateUrl: './questions-page.html',
  styleUrl: './questions-page.scss'
})
export class QuestionsPage implements OnInit {
  selectedAssignmentId: string = '';
  existingAssignments: AssignmentDto[] = []; // initially empty
  hasManageQuestionsPrivilege: boolean = false;

  constructor(private assignmentService: AssignmentApiService, private requestContext: RequestContextService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.hasManageQuestionsPrivilege = this.requestContext.hasPrivilege(Privileges.ManageQuestions) || this.requestContext.isAdmin;
      if(this.hasManageQuestionsPrivilege) 
      {
        this.existingAssignments = await this.assignmentService.getAllAssignments();
      }
    } catch (err) {
      console.error('Failed to fetch assignments', err);
    }
  }

  get selectedAssignment() {
    return this.existingAssignments.find(a => a.id === this.selectedAssignmentId);
  }
}
