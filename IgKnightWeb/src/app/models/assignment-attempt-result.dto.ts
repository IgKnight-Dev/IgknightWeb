export interface AssignmentAttemptResultDto {
  attemptId: string;
  assignmentId: string;
  userId: string;
  totalQuestions: number;
  correctAnswers: number;
  scorePercentage: number;
  questionResults: {
    question: string;
    userAnswer: string;
    correctAnswer: string;
    explanation: string;
    isCorrect: boolean;
  }[];
  feedback: AttemptQuestionFeedbackDto[];
}

export interface AttemptQuestionFeedbackDto {
  questionId: string;
  questionText: string;
  selectedOption: string;
  correctOption: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface UserAssignmentSummaryDto {
  attemptId: string;
  assignmentId: string;
  assignmentTitle: string;
  scorePercentage: number;
  attemptedAt: string; // ISO date string (can be parsed to Date if needed)
}

export interface AssignmentAnswerDto {
  questionId: string;
  selectedOption: 'A' | 'B' | 'C' | 'D';
}