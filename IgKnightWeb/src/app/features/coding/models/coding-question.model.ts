import { CodingQuestionCategory, DifficultyLevel, Status } from "../../../models/Enums";

// --- MetaData ---
export interface CodingQuestionMeta {
  title: string;
  description: string;
  constraints: string[];
  tags: string[];
  acceptance: number;
  likes: number;
  hints: string[];
}

// --- DTOs ---
export interface CreateCodingQuestionDto {
  slug: string;
  metaData: CodingQuestionMeta;
  difficulty: DifficultyLevel;
  category: CodingQuestionCategory;
  status: Status;
}

export interface UpdateCodingQuestionDto {
  slug: string;
  metaData: CodingQuestionMeta;
  difficulty: DifficultyLevel;
  category: CodingQuestionCategory;
  status: Status;
}

// --- Main DTO returned from GET by ID ---
export interface CodingQuestionDto {
  id: string;
  slug: string;
  metaData: CodingQuestionMeta;
  difficulty: DifficultyLevel;
  category: CodingQuestionCategory;
  status: Status;
  createdAt: string;
  updatedAt?: string;
}

// --- Summary DTO (used in list view) ---
export interface CodingQuestionSummaryDto {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  difficulty: DifficultyLevel;
  category: CodingQuestionCategory;
  status: Status;
}

// --- Test Case Models ---
export interface CreateCodingTestCaseDto {
  input: string;
  expectedOutput: string;
  isSample: boolean;
}

export interface UpdateCodingTestCaseDto {
  input: string;
  expectedOutput: string;
  isSample: boolean;
}

export interface CodingTestCaseDto {
  id: string;
  questionId: string;
  input: string;
  expectedOutput: string;
  isSample: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt?: string;
}


export interface TestResultDto {
  id: number;
  pass: boolean;
  isSample: boolean; // true for sample cases only
  sampleInput?: string;
  expected?: string;
  actual?: string;
}

