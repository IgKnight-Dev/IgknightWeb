export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  topics: number;
  status: 'Published' | 'Draft';
}