import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/apiservice';
import { AssignmentQuestionDto, CreateAssignmentQuestionDto, UpdateAssignmentQuestionDto } from '../../models/assignment-question.model';
import { environment } from '../../../environment';


@Injectable({ providedIn: 'root' })
export class AssignmentQuestionsApiService {
  constructor(private http: ApiService) {}
  private baseUrl = environment.contentApiUrl;


  async addQuestion(assignmentId: string, data: CreateAssignmentQuestionDto): Promise<void> {
    await this.http.post(this.baseUrl, `assignments/${assignmentId}/questions/add`, data);
  }

  async updateQuestion(
    assignmentId: string,
    questionId: string,
    data: UpdateAssignmentQuestionDto
  ): Promise<void> {
    await this.http.put(this.baseUrl, `assignments/${assignmentId}/questions/${questionId}/update`, data);
  }

  async deleteQuestion(assignmentId: string, questionId: string): Promise<void> {
    await this.http.delete(this.baseUrl, `assignments/${assignmentId}/questions/${questionId}/delete`);
  }

  async getAssignmentQuestions(assignmentId: string): Promise<AssignmentQuestionDto[]> {
    return await this.http.get(this.baseUrl, `assignments/${assignmentId}/questions`);
  }
}
