import { Component } from '@angular/core';
import { AssignmentApiService } from '../services/assignment-api.service';
import { CreateAssignmentDto } from '../../models/assignment.model';
import { DifficultyLevel, Technologies } from '../../models/Enums';
import { RequestContextService } from '../../core/services/request.context';
import { Privileges } from '../../models/privileges.constant';

@Component({
  selector: 'app-assignments-form',
  standalone: false,
  templateUrl: './assignments-form.html',
  styleUrl: './assignments-form.scss'
})
export class AssignmentsForm {
  title = '';
  description = '';
  track: Technologies = Technologies.CSS;
  level: DifficultyLevel = DifficultyLevel.Easy;
  durationMinutes = 60;
  dueDate: string = '';
  technologies = Object.keys(Technologies).filter(key => isNaN(Number(key)));;
  difficultyLevels = Object.keys(DifficultyLevel).filter(key => isNaN(Number(key)));
  defaultLevel: string = this.difficultyLevels[1]; // "Medium"
  defaultTrack: string = this.technologies[0];

  loading = false;
  successMessage = '';
  errorMessage = '';
    
  constructor(private assignmentApi: AssignmentApiService, private requestContext: RequestContextService) 
  {
  }

  canCreateAssignment(): boolean {
    return (this.requestContext.hasPrivilege(Privileges.CreateAssignments) || this.requestContext.isAdmin);
  }

  async createAssignment() {
    if (!this.title || !this.defaultTrack || !this.defaultLevel) {
      this.errorMessage = 'Please fill all required fields.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const dto: CreateAssignmentDto = {
      title: this.title,
      description: this.description,
      technology: Technologies[this.defaultTrack as keyof typeof Technologies],
      difficultyLevel: DifficultyLevel[this.defaultLevel as keyof typeof DifficultyLevel],
    };

    try {
      const result = await this.assignmentApi.createAssignment(dto);
      this.successMessage = 'Assignment created successfully!';
      this.clearForm();
    } catch (err) {
      this.errorMessage = 'Failed to create assignment. Please try again.';
    } finally {
      this.loading = false;
    }
  }

  clearForm() 
  {
    this.title = '';
    this.description = '';
    this.defaultTrack = Technologies.HTML.toString();
    this.defaultLevel = DifficultyLevel.Easy.toString();
    this.durationMinutes = 60;
    this.dueDate = '';
  }
}

