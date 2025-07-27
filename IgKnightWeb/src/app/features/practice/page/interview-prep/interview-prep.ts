import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interview-prep',
  standalone: false,
  templateUrl: './interview-prep.html',
  styleUrl: './interview-prep.scss'
})
export class InterviewPrep {
  constructor(private router: Router) {}
  isPageDisabled = true;

  // You can toggle this based on some logic
  startPrep(slug: string) {
    // Example: temporarily disable page interaction
    this.isPageDisabled = true;

    // Simulate a delay
    setTimeout(() => {
      this.isPageDisabled = false;
    }, 2000);
  }

  topics = [
    {
      title: 'Data Structures & Algorithms',
      icon: '🧠',
      description: 'Master the most frequently asked DSA questions with patterns.',
      slug: 'dsa'
    },
    {
      title: 'System Design',
      icon: '🕸️',
      description: 'Understand scalable architectures, databases, and real-world systems.',
      slug: 'system-design'
    },
    {
      title: 'HR + Behavioral',
      icon: '🗣️',
      description: 'Ace HR interviews with real-world scenarios and sample answers.',
      slug: 'hr'
    },
    {
      title: 'DBMS & SQL',
      icon: '🗃️',
      description: 'Practice queries, normalization, transactions, indexing & more.',
      slug: 'dbms'
    },
    {
      title: 'Operating Systems',
      icon: '🖥️',
      description: 'Brush up on processes, memory, concurrency, scheduling etc.',
      slug: 'os'
    },
    {
      title: 'Networking',
      icon: '🌐',
      description: 'Covers OSI layers, protocols, firewalls, HTTP, DNS & more.',
      slug: 'networking'
    }
  ];
}
