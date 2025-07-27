import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AssignmentQuestionDto, UpdateAssignmentQuestionDto } from '../../models/assignment-question.model';
import { AssignmentQuestionsApiService } from '../services/assignment-questions-api.service';
import { UpdateAssignmentDto } from '../../models/assignment.model';

@Component({
  selector: 'app-question-list',
  standalone: false,
  templateUrl: './question-list.html',
  styleUrl: './question-list.scss'
})
export class QuestionList {
  @Input() assignmentId!: string;
  @Input() assignmentTitle!: string;
  assignmentQuestions: AssignmentQuestionDto[] = [];
  deletingQuestion = false;
  questionDeleteConfirmed = false;
  selectedQuestion: AssignmentQuestionDto | null = null;
  selectedQuestionIndex: number = -1;
  
  constructor(private assignmentQuestionsService: AssignmentQuestionsApiService) {}
    
    async ngOnInit(): Promise<void> 
    {
      if(this.assignmentId)
      {
        this.loadQuestionsForAssignment();
        
      }
    }

  ngOnChanges() {
    if (this.assignmentId) {
      this.loadQuestionsForAssignment();
    }
  }

  questions: AssignmentQuestionDto[] = [];
  expandedMap: { [key: number]: boolean } = {};
  editModeMap: { [key: number]: boolean } = {};

toggleExpand(i: number) {
  this.expandedMap[i] = !this.expandedMap[i];
}

enableEdit(i: number) {
  this.expandedMap[i] = true;
  this.editModeMap[i] = true;
}

cancelEdit(index: number) {
  this.expandedMap[index] = false;
}

openDeleteQuestionModal(question: AssignmentQuestionDto, index: number): void {
  this.selectedQuestion = question;
  this.selectedQuestionIndex = index;
  this.questionDeleteConfirmed = false;
  this.deletingQuestion = true;
}

confirmQuestionDelete(): void {
  if (!this.selectedQuestion) return;

  // Call delete logic here
  this.deleteQuestion(this.selectedQuestionIndex, this.selectedQuestion); // or use the index
  this.deletingQuestion = false;
}

async deleteQuestion(index: number, question: AssignmentQuestionDto) 
{
  if(question.id != null && question.id != undefined) 
  {
    try
    {

    await this.assignmentQuestionsService.deleteQuestion(this.assignmentId, question.id);
    delete this.editModeMap[index];
    this.questions.splice(index, 1);

    }
    catch(err) {
      console.error('Failed to delete question', err);
      alert('Error deleting question.');
    }
  }
}

  async loadQuestionsForAssignment() 
  {
    try 
      {
        this.questions = await this.assignmentQuestionsService.getAssignmentQuestions(this.assignmentId);
      } 
    catch (err) 
    {
      console.error('Failed to fetch assignments', err);
    }
  }

  async saveChanges(index: number, question: AssignmentQuestionDto) 
  {
    const updatedData: UpdateAssignmentQuestionDto = {
    questionText: question.questionText,
    optionA: question.optionA,
    optionB: question.optionB,
    optionC: question.optionC,
    optionD: question.optionD,
    correctOption: question.correctOption,
    explanation: question.explanation,
    };

    if(question.id !== null && question.id !== undefined)
    {
      try 
      {
        await this.assignmentQuestionsService.updateQuestion(this.assignmentId, question.id, updatedData);
        this.expandedMap[index] = false;
      } 
      catch (err) {
        console.error('Failed to update question', err);
        alert('Error saving changes.');
      }
    }
  }
}
