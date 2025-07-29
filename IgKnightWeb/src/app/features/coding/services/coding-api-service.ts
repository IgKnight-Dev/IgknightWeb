import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/apiservice';
import { environment } from '../../../../environments/environment';
import { CodingQuestionDto, CodingQuestionSummaryDto, CodingTestCaseDto, CreateCodingQuestionDto, CreateCodingTestCaseDto, UpdateCodingQuestionDto, UpdateCodingTestCaseDto } from '../models/coding-question.model';


@Injectable({ providedIn: 'root' })
export class CodingQuestionApiService {
  constructor(private http: ApiService) {}
  private baseUrl = environment.contentApiUrl;

  // ✅ POST: Create question
  async createQuestion(data: CreateCodingQuestionDto): Promise<string> {
    return await this.http.post(this.baseUrl, 'codingquestion/add', data);
  }

  // ✅ PUT: Update question
  async updateQuestion(id: string, data: UpdateCodingQuestionDto): Promise<void> {
    return await this.http.put(this.baseUrl, `codingquestion/${id}/update`, data);
  }

  // ✅ PUT: Publish question
  async publishQuestion(id: string, data: UpdateCodingQuestionDto): Promise<void> {
    return await this.http.put(this.baseUrl, `codingquestion/${id}/publish`, data);
  }

  // ✅ DELETE: Delete question
  async deleteQuestion(id: string): Promise<void> {
    return await this.http.delete(this.baseUrl, `codingquestion/${id}/delete`);
  }

  // ✅ GET: Get question by ID
  async getQuestionById(id: string): Promise<CodingQuestionDto> {
    return await this.http.get(this.baseUrl, `codingquestion/${id}`);
  }

  // ✅ GET: Get all questions
  async getAllQuestions(): Promise<CodingQuestionSummaryDto[]> {
    return await this.http.get(this.baseUrl, `codingquestion/all`);
  }

  // -----------------------
  // ✅ Test Case Methods
  // -----------------------

  // ✅ POST: Add test case to a question
  async addTestCase(questionId: string, data: CreateCodingTestCaseDto): Promise<void> {
    return await this.http.post(this.baseUrl, `codingquestion/${questionId}/test-cases/add`, data);
  }

  // ✅ PUT: Update test case
  async updateTestCase(testCaseId: string, data: UpdateCodingTestCaseDto): Promise<void> {
    return await this.http.put(this.baseUrl, `codingquestion/test-cases/${testCaseId}/update`, data);
  }

  // ✅ DELETE: Delete test case
  async deleteTestCase(testCaseId: string): Promise<void> {
    return await this.http.delete(this.baseUrl, `codingquestion/test-cases/${testCaseId}/delete`);
  }

  // ⚠️ Optional (if you add a get test cases API)
  async getTestCasesByQuestionId(questionId: string): Promise<CodingTestCaseDto[]> {
    return await this.http.get(this.baseUrl, `codingquestion/${questionId}/test-cases`);
  }

  async getTestCasesById(id: string): Promise<CodingTestCaseDto[]> {
    return await this.http.get(this.baseUrl, `codingquestion/test-cases/id/${id}`);
  }

  async getSampleTestCasesByQuestionId(questionId: string): Promise<CodingTestCaseDto[]> {
    return await this.http.get(this.baseUrl, `codingquestion/${questionId}/sample-test-cases`);
  }
}
