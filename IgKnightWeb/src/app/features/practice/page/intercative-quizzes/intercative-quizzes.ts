import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentQuestionDto } from '../../../../models/assignment-question.model';
import { AssignmentDto } from '../../../../models/assignment.model';
import { DifficultyLevel, Technologies } from '../../../../models/Enums';
import { GuestAssignmentApiService } from '../../../../content/services/guest-api.service';
import { RequestContextService } from '../../../../core/services/request.context';
import { AssignmentAttemptApiService } from '../../../../content/services/assignment-attempt-api.service';
import { AssignmentAnswerDto, AssignmentAttemptResultDto } from '../../../../models/assignment-attempt-result.dto';

interface QuizQuestion extends AssignmentQuestionDto {
  selectedOption?: number;
  answered?: boolean;
}

@Component({
  selector: 'app-intercative-quizzes',
  standalone: false,
  templateUrl: './intercative-quizzes.html',
  styleUrl: './intercative-quizzes.scss',
})
export class IntercativeQuizzes implements OnInit, OnDestroy {
  showExitQuizModal = false;
  isLoading = true;
  assignmentId!: string;
  questions: QuizQuestion[] = [];
  selectedIndex = 0;
  selectedOptionIndex: number | null = null;
  intervalId: any;
  assignmentDetails: AssignmentDto = { title: '', description: '', technology: Technologies.JavaScript, difficultyLevel: DifficultyLevel.Easy, id: '', status: 0, questions: [] };
  technologies = Object.keys(Technologies).filter(key => isNaN(Number(key)));;
  difficultyLevels = Object.keys(DifficultyLevel).filter(key => isNaN(Number(key)));
  difficultyMap = {
    [DifficultyLevel.Easy]: { label: 'Beginner', class: 'bg-green-100 text-green-700' },
    [DifficultyLevel.Medium]: { label: 'Intermediate', class: 'bg-yellow-100 text-yellow-700' },
    [DifficultyLevel.Hard]: { label: 'Expert', class: 'bg-red-100 text-red-600' },
  };
  attemptResult?: AssignmentAttemptResultDto;
  isQuizSubmitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private guestApiService: GuestAssignmentApiService,
    private requestContext: RequestContextService,
    private assignmentApiService: AssignmentAttemptApiService
  ) {}

  async ngOnInit(): Promise<void> {
  this.assignmentId = this.route.snapshot.paramMap.get('assignmentId')!;
  if (this.assignmentId) {
    try {
      this.isLoading = true;

      const fetched = await this.guestApiService.getAssignmentQuestions(this.assignmentId);
      this.questions = fetched.map(q => ({
        ...q,
        selectedOption: undefined,
        answered: false,
      }));

      this.assignmentDetails = await this.guestApiService.getAssignmentById(this.assignmentId);

      if (this.questions.length > 0) {
        this.selectQuestion(0);
      }
    } catch (error) {
      console.error('Error loading quiz:', error);
    } finally {
      this.isLoading = false;
    }
  }
}

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  get currentQuestion(): QuizQuestion | undefined {
  if (
    this.questions.length === 0 ||
    this.selectedIndex < 0 ||
    this.selectedIndex >= this.questions.length
  ) {
    return undefined;
  }
  return this.questions[this.selectedIndex];
}


  get progressPercent(): number {
    const answeredCount = this.questions.filter((q) => q.answered).length;
    return this.questions.length > 0 ? (answeredCount / this.questions.length) * 100 : 0;
  }

  selectQuestion(index: number): void {
    this.selectedIndex = index;
    const selected = this.questions[index].selectedOption;
    this.selectedOptionIndex = typeof selected === 'number' ? selected : null;
  }

  selectOption(index: number): void {
    const question = this.questions[this.selectedIndex];
    question.selectedOption = index;
    question.answered = true;
    this.selectedOptionIndex = index;
  }

  goToPrevious(): void {
    if (this.selectedIndex > 0) {
      this.selectQuestion(this.selectedIndex - 1);
    }
  }

  goToNext(): void {
    if (this.selectedIndex < this.questions.length - 1) {
      this.selectQuestion(this.selectedIndex + 1);
    }
  }

  allQuestionsAnswered(): boolean {
  return this.questions.every(q => q.selectedOption !== undefined && q.selectedOption !== null);
  }

  submitQuiz(): void {
  const optionMap = ['A', 'B', 'C', 'D'];
  const assignmentAnswers: AssignmentAnswerDto[] = this.questions
    .filter(q => q.id && q.selectedOption !== undefined)
    .map(q => ({
      questionId: q.id!,
      selectedOption: optionMap[q.selectedOption!] as 'A' | 'B' | 'C' | 'D',
    }));

  const handleResult = (result: AssignmentAttemptResultDto) => {
    this.attemptResult = result;
    this.isQuizSubmitted = true;
    console.log('Attempt result:', result);
  };

  if (this.requestContext.isLoggedIn) {
    this.assignmentApiService.submitAttempt(this.assignmentId, assignmentAnswers)
      .then(handleResult)
      .catch(error => {
        console.error('Error submitting attempt (logged-in):', error);
      });
  } else {
    this.guestApiService.submitGuestAttempt(this.assignmentId, assignmentAnswers)
      .then(handleResult)
      .catch(error => {
        console.error('Error submitting attempt (guest):', error);
      });
  }
}

  retakeQuiz(): void {
  this.isQuizSubmitted = false;
  this.attemptResult = undefined;
  this.selectedIndex = 0;
  this.questions.forEach(q => q.selectedOption = undefined);
}



  getOptionLabel(index: number): string {
    return String.fromCharCode(65 + index); // A, B, C, D
  }

  confirmExitQuiz(): void {
    this.showExitQuizModal = false;
    this.router.navigate(['/practice/assignments']);
  }

  pad(n: number): string {
    return n < 10 ? '0' + n : n.toString();
  }

  exitQuiz(): void {
    this.showExitQuizModal = true;
  }

  get performanceFeedback(): { title: string; subtitle: string; } {
  const percentage = this.attemptResult ? this.attemptResult.scorePercentage : 0;
  if (percentage >= 90) {
    return {
      title: 'Excellent!',
      subtitle: 'You nailed it. Keep up the momentum!',
    };
  } else if (percentage >= 75) {
    return {
      title: 'Great Job!',
      subtitle: 'Almost perfect. Just a little more!',
    };
  } else if (percentage >= 50) {
    return {
      title: 'Not Bad!',
      subtitle: 'You’re getting there. Keep practicing.',
    };
  } else {
    return {
      title: 'Keep Practicing!',
      subtitle: 'Don’t worry. Review and try again.',
    };
  }
}
}
