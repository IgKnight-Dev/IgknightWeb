import { Injectable } from '@angular/core';
import { AssignmentDto, AssignmentsOverviewDataDto, CreateAssignmentDto, UpdateAssignmentDto } from '../../models/assignment.model';
import { ApiService } from '../../core/services/apiservice';
import { environment } from '../../../environments/environment';
import { Technologies } from '../../models/Enums';

@Injectable({ providedIn: 'root' })
export class AssignmentApiService {
  constructor(private http: ApiService) {}
  private baseUrl = environment.contentApiUrl;


  // ✅ POST: Create new assignment
  async createAssignment(data: CreateAssignmentDto): Promise<string> {
    return await this.http.post(this.baseUrl, 'assignment/add', data);
  }

  // ✅ PUT: Update existing assignment
  async updateAssignment(id: string, data: UpdateAssignmentDto): Promise<void> {
    return await this.http.put(this.baseUrl, `assignment/${id}/update`, data);
  }

  // ✅ PUT: Publish assignment
  async publishAssignment(id: string, data: UpdateAssignmentDto): Promise<void> {
    return await this.http.put(this.baseUrl, `assignment/${id}/publish`, data);
  }

  // ✅ PUT: UnPublish assignment
  async unPublishAssignment(id: string, data: UpdateAssignmentDto): Promise<void> {
    return await this.http.put(this.baseUrl, `assignment/${id}/unpublish`, data);
  }


  // ✅ DELETE: Delete assignment
  async deleteAssignment(id: string): Promise<void> {
    return await this.http.delete(this.baseUrl, `assignment/${id}/delete`);
  }

  // ✅ GET: Get assignment by ID
  async getAssignmentById(id: string): Promise<AssignmentDto> {
    return await this.http.get(this.baseUrl, `assignment/${id}`);
  }

  // ✅ GET: Get all assignments
  async getAllAssignments(): Promise<AssignmentDto[]> {
    return await this.http.get(this.baseUrl, `assignment/all`);
  }

  // ✅ GET: Get all assignments by tech
  async getAssignmentsOverView(): Promise<AssignmentsOverviewDataDto[]> {
    return await this.http.get(this.baseUrl, `assignment/overview`);
  }
}
