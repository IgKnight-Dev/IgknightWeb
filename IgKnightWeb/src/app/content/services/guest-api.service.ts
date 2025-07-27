import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/apiservice';
import { AssignmentQuestionDto } from '../../models/assignment-question.model';
import { environment } from '../../../environment';
import { AssignmentAnswerDto, AssignmentAttemptResultDto } from '../../models/assignment-attempt-result.dto';
import { AssignmentDto, AssignmentsOverviewDataDto } from '../../models/assignment.model';

@Injectable({ providedIn: 'root' })
export class GuestAssignmentApiService {
  constructor(private http: ApiService) {}
  private baseUrl = environment.contentApiUrl;

  /**
   * Get questions for an assignment without authentication
   */
  async getAssignmentQuestions(assignmentId: string): Promise<AssignmentQuestionDto[]> {
    return await this.http.get(this.baseUrl, `public/assignments/${assignmentId}/questions`);
  }

  /**
   * Get assignment without authentication
   */
  async getAssignmentById(assignmentId: string): Promise<AssignmentDto> {
    return await this.http.get(this.baseUrl, `public/assignments/${assignmentId}`);
  }

  /**
   * Get all assignments without authentication
   */
  async getAllAssignments(): Promise<AssignmentsOverviewDataDto[]> {
    return await this.http.get(this.baseUrl, `public/assignments/`);
  }

  /**
   * Submit answers for unauthenticated user
   */
  async submitGuestAttempt(assignmentId: string,answers: AssignmentAnswerDto[]): Promise<AssignmentAttemptResultDto> {
    return await this.http.post(
      this.baseUrl,
      `public/assignments/${assignmentId}/guest/submit`,
      answers
    );
  }
}
