import { Component } from '@angular/core';

@Component({
  selector: 'app-inbox-page',
  standalone: false,
  templateUrl: './inbox-page.html',
  styleUrl: './inbox-page.scss'
})
export class InboxPage {
  selectedFeedback: any = null;
  isPageDisabled = true;


  feedbacks = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      assignment: 'HTML Fundamentals',
      question: 'Question about semantic HTML',
      message: 'Hi, I\'m confused about when to use <section> vs <div>...',
      time: '2 hours ago',
      priority: 'medium',
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike.c@example.com',
      assignment: 'CSS Grid Layout',
      question: 'CSS Grid not working properly',
      message: 'My grid layout isn\'t displaying correctly...',
      time: '5 hours ago',
      priority: 'high',
    },
    {
      id: 3,
      name: 'Emma Davis',
      email: 'emma.d@example.com',
      assignment: 'JavaScript Basics',
      question: 'Need clarification on functions',
      message: 'I\'m struggling with arrow vs regular functions...',
      time: '1 day ago',
      priority: 'low',
    },
  ];

  selectFeedback(item: any) {
    this.selectedFeedback = item;
  }
}
