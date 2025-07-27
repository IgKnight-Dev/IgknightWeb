import { Injectable } from "@angular/core";
import { ApiService } from "../../core/services/apiservice";
import { AssignmentAnswerDto, AssignmentAttemptResultDto, UserAssignmentSummaryDto } from "../../models/assignment-attempt-result.dto";
import { environment } from "../../../environment";

@Injectable({ providedIn: 'root' })
export class AssignmentAttemptApiService {
  constructor(private http: ApiService) {}
  private baseUrl = environment.contentApiUrl;


  async submitAttempt(assignmentId: string, answers: AssignmentAnswerDto[]): Promise<AssignmentAttemptResultDto> {
    return await this.http.post(this.baseUrl, `assignments/${assignmentId}/attempt`, answers);
  }

  async getUserAttempts(assignmentId: string): Promise<UserAssignmentSummaryDto[]> {
    return await this.http.get(this.baseUrl, `assignments/${assignmentId}/attempt/summary`);
  }
}
