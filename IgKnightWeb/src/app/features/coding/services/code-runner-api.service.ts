import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/apiservice';
import { environment } from '../../../../environment';
import { TestResultDto } from '../models/coding-question.model';

export interface CodeRunnerRequest {
  code: string;
  language: string; // e.g., "python"
}

@Injectable({ providedIn: 'root' })
export class CodeRunnerApiService {
  private baseUrl = environment.contentApiUrl;

  constructor(private http: ApiService) {}

  // ✅ POST: Run code using backend docker sandbox
  async runCode(payload: CodeRunnerRequest, questionId: string): Promise<TestResultDto[]> {
    return await this.http.post(this.baseUrl, `code-runner/${questionId}/execute`, payload);
  }
}
