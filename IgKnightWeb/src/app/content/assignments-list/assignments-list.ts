import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Assignment } from '../assignment.model';
import { AssignmentDto, AssignmentsOverviewDataDto, UpdateAssignmentDto } from '../../models/assignment.model';
import { AssignmentApiService } from '../services/assignment-api.service';
import {  DifficultyLevel, Status, Technologies } from '../../models/Enums';
import { RequestContextService } from '../../core/services/request.context';
import { Privileges } from '../../models/privileges.constant';

@Component({
  selector: 'app-assignments-list',
  standalone: false,
  templateUrl: './assignments-list.html',
  styleUrl: './assignments-list.scss'
})
export class AssignmentsList {
  constructor(private modalService: NgbModal, private assignmentService: AssignmentApiService, private requestContext: RequestContextService) {}
  editModalOpen: boolean = false;
  showPublishModal: boolean = false;
  showUnPublishModal: boolean = false;
  deletingAssignment: boolean = false;
  deleteConfirmed: boolean = false;
  selectedAssignment: any = null;
  trackOptions: string[] = ['Frontend', 'Backend', 'Fullstack', 'DevOps']; // Customize as needed
  difficultyOptions: string[] = ['Easy', 'Medium', 'Hard']; // Customize as needed
  assignments: AssignmentsOverviewDataDto[] = []; // initially empty
  AssignmentStatus = Status; // expose enum to template
  technologies = Object.keys(Technologies).filter(key => isNaN(Number(key)));;
  defaultTrack: string =""
  difficultyLevels = Object.keys(DifficultyLevel).filter(key => isNaN(Number(key)));
  defaultLevel: string =""
  viewAssignments: boolean = false;
  manageAssignments: boolean = false;

  difficultyMap = {
  [DifficultyLevel.Easy]: { label: 'Beginner', class: 'bg-green-100 text-green-700' },
  [DifficultyLevel.Medium]: { label: 'Intermediate', class: 'bg-yellow-100 text-yellow-700' },
  [DifficultyLevel.Hard]: { label: 'Expert', class: 'bg-red-100 text-red-600' },
};

  getTechnologyName(techValue: number): string {
  return Object.keys(Technologies).find(key => Technologies[key as keyof typeof Technologies] === techValue) || '';
}

  async ngOnInit(): Promise<void> 
      {
        this.viewAssignments = this.requestContext.hasPrivilege(Privileges.ViewAssignments) || this.requestContext.isAdmin;
        this.manageAssignments = this.requestContext.hasPrivilege(Privileges.ManageAssignments) || this.requestContext.isAdmin;
        if(this.viewAssignments || this.manageAssignments) 
        {
          await this.FetchAssignmentQuestions();
        }
      }
  
    ngOnChanges() 
    {
      this.FetchAssignmentQuestions();
    }

  editAssignment(assignment: any) {
    this.editingAssignment = { ...assignment };
  }

  closeEditModal() {
    this.editModalOpen = false;
    this.selectedAssignment = null;
  }

  saveChanges() {
    // Handle update logic
  }

  openEditModal(assignment: any) {
    this.selectedAssignment = { ...assignment }; // Clone to avoid direct mutation
    this.modalService.open(this.editingAssignment, { centered: true });
  }

  cancelEdit() {
    this.editingAssignment = null;
  }

  updateAssignment() {
    // Save logic here (API call or local update)
    this.cancelEdit();
  }
  async FetchAssignmentQuestions() 
    {
      try 
      {
        this.assignments = await this.assignmentService.getAssignmentsOverView();
      } 
      catch (err) {
          console.error('Failed to fetch assignments', err);
      }
    }


editingAssignment: AssignmentsOverviewDataDto | null = null;
editFormData = {
  title: '',
  track: ''
};

getStatusLabel(status: Status): string {
    switch (status) {
      case Status.Published:
        return 'Published';
      case Status.Draft:
        return 'Draft';
      default:
        return 'Unknown';
    }
  }

handleEdit(assignment: AssignmentsOverviewDataDto) {
  this.editingAssignment = assignment;
  this.defaultTrack = this.technologies[this.editingAssignment.technology];
  this.defaultLevel = this.difficultyLevels[this.editingAssignment.difficultyLevel];
  this.editFormData = { title: assignment.title, track: assignment.technology.toString() };
}

handleCancelEdit() {
  this.editingAssignment = null;
}

  async saveEditedAssignment() 
  {
    if (!this.editingAssignment) return;
    if (this.editingAssignment?.id != null) 
    {
        const updateDto: UpdateAssignmentDto = {
        title: this.editingAssignment.title,
        description: this.editingAssignment.description,
        technology: this.editingAssignment.technology,
        difficultyLevel: this.editingAssignment.difficultyLevel,
        status: this.editingAssignment.status,
      };

      try {
        await this.assignmentService.updateAssignment(this.editingAssignment.id, updateDto);
        await this.FetchAssignmentQuestions(); // Refresh list
        this.handleCancelEdit(); // Close modal
      } catch (err) {
        console.error('Failed to update assignment', err);
      }
    }
  }

  confirmPublish() {
    this.showPublishModal = false;

    // Add your actual publish logic here
    this.publishAssignment();
  }

  confirmUnpublish() {
    this.showUnPublishModal = false;

    // Add your actual publish logic here
    this.unPublishAssignment();
  }

  openModal(assignment: AssignmentsOverviewDataDto) 
  {
    this.selectedAssignment = assignment;
    if(assignment.status === Status.Published) 
    {
      this.showUnPublishModal = true;
    }
    else if (assignment.status == Status.Draft)
    {
      this.showPublishModal = true;
    }
  }

  publishAssignment() 
  {
    if (!this.selectedAssignment) return;

    const updateDto: UpdateAssignmentDto = {
      title: this.selectedAssignment.title,
      description: this.selectedAssignment.description,
      technology: this.selectedAssignment.technology,
      difficultyLevel: this.selectedAssignment.difficultyLevel,
      status: Status.Published,
    };

    this.assignmentService.publishAssignment(this.selectedAssignment.id, updateDto)
      .then(() => {
        this.showPublishModal = false;
        this.FetchAssignmentQuestions(); // Refresh list
      })
      .catch(err => {
        console.error('Failed to publish assignment', err);
      }); 
  }

  unPublishAssignment() 
  {
    if (!this.selectedAssignment) return;

    const updateDto: UpdateAssignmentDto = {
      title: this.selectedAssignment.title,
      description: this.selectedAssignment.description,
      technology: this.selectedAssignment.technology,
      difficultyLevel: this.selectedAssignment.difficultyLevel,
      status: Status.Published,
    };

    this.assignmentService.unPublishAssignment(this.selectedAssignment.id, updateDto)
      .then(() => {
        this.showPublishModal = false;
        this.FetchAssignmentQuestions(); // Refresh list
      })
      .catch(err => {
        console.error('Failed to publish assignment', err);
      }); 
  }

  handlePublishToggle(assignment: AssignmentsOverviewDataDto) 
  {
    this.selectedAssignment = assignment;
    this.showPublishModal = true;
  }

  openDeleteModal(assignment: AssignmentsOverviewDataDto) {
    this.selectedAssignment = assignment;
    this.deletingAssignment = true;
  }

  confirmDelete() {
    this.deletingAssignment = false;
    this.deleteAssignment();
    this.deleteConfirmed = true;
  }

  deleteAssignment() {
    if (!this.selectedAssignment) return;

    this.assignmentService.deleteAssignment(this.selectedAssignment.id)
      .then(() => {
        this.deletingAssignment = false;
        this.FetchAssignmentQuestions(); // Refresh list
      })
      .catch(err => {
        console.error('Failed to delete assignment', err);
      });
  }
}
