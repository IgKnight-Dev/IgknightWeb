import { Component, Input, OnInit } from '@angular/core';
import { AssignmentQuestionsApiService } from '../services/assignment-questions-api.service';
import { AssignmentQuestionDto } from '../../models/assignment-question.model';

@Component({
  selector: 'app-question-detail',
  standalone: false,
  templateUrl: './question-detail.html',
  styleUrls: ['./question-detail.scss']
})
export class QuestionDetail implements OnInit {
  @Input() assignmentId!: string;
  @Input() assignmentTitle!: string;

  selectedAnswer: 'A' | 'B' | 'C' | 'D' | '' = ''; // initial value

  totalQuestions: number = 0;
  assignmentQuestions: AssignmentQuestionDto[] = [];

  // Form fields
  questionText: string = '';
  optionA: string = '';
  optionB: string = '';
  optionC: string = '';
  optionD: string = '';
  explanation: string = '';

  constructor(private assignmentQuestionsService: AssignmentQuestionsApiService) {}

  async ngOnInit(): Promise<void> 
    {
      if(this.assignmentId)
      {
        this.FetchAssignmentQuestions();
      }
    }

  ngOnChanges() {
    if (this.assignmentId) {
      this.FetchAssignmentQuestions();
    }
  }

  async createQuestion(): Promise<void> {
    if (!this.questionText || !this.selectedAnswer) {
      alert('Please fill in the question and correct answer.');
      return;
    }

    const newQuestion: AssignmentQuestionDto = {
      assignmentId: this.assignmentId,
      questionText: this.questionText,
      optionA: this.optionA,
      optionB: this.optionB,
      optionC: this.optionC,
      optionD: this.optionD,
      correctOption: this.selectedAnswer,
      explanation: this.explanation
    };

    try {
      await this.assignmentQuestionsService.addQuestion(this.assignmentId, newQuestion);
      this.FetchAssignmentQuestions();

      // Reset form
      this.clearForm();
    } catch (error) {
      console.error('Failed to create question', error);
      alert('Error creating question.');
    }
  }

  clearForm(): void {
    this.questionText = '';
    this.optionA = '';
    this.optionB = '';
    this.optionC = '';
    this.optionD = '';
    this.selectedAnswer = '';
    this.explanation = '';
  }

  async FetchAssignmentQuestions() 
  {
    try {
        if (this.assignmentId) {
          this.assignmentQuestions = await this.assignmentQuestionsService.getAssignmentQuestions(this.assignmentId);
          this.totalQuestions = this.assignmentQuestions.length;
        }
      } 
    catch (err) {
        console.error('Failed to fetch assignments', err);
      }
  }
}
