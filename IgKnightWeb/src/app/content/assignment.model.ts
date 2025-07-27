export interface Assignment {
  id: string;
  title: string;
  description: string;
  track: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  durationMinutes: number;
  dueDate: string;
  questionCount: number;
  studentCount: number;
  status: 'Active' | 'Draft' | 'Completed' | 'Inactive'; // Remove 'Inactive'
}
