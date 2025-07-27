import { AssignmentQuestionDto } from "./assignment-question.model";
import {  DifficultyLevel, Status, Technologies } from "./Enums";

export interface AssignmentDto {
  id?: string; // only needed for edit/view
  title: string;
  description?: string;
  technology: Technologies;
  difficultyLevel: DifficultyLevel;
  createdAt?: string;
  status: Status;
  questions: AssignmentQuestionDto[];
}

export interface AssignmentsOverviewDataDto {
  id?: string; // only needed for edit/view
  title: string;
  description?: string;
  technology: Technologies;
  difficultyLevel: DifficultyLevel;
  status: Status;
  totalQuestions: number;
}

export interface CreateAssignmentDto {
    title: string;
    description?: string;
    technology: Technologies;
    difficultyLevel: DifficultyLevel; // true = Hard, false = Easy (assuming enum or boolean)
}

export interface UpdateAssignmentDto {
    title: string;
    description?: string;
    technology: Technologies;
    difficultyLevel: DifficultyLevel; // true = Hard, false = Easy (assuming enum or boolean)
    status: Status;
}