import { Component } from '@angular/core';

@Component({
  selector: 'app-motivation.page',
  standalone: false,
  templateUrl: './motivation.page.html',
  styleUrl: './motivation.page.scss'
})
export class MotivationPage {
  founders = [
  {
    name: 'Elon Musk',
    title: 'Built His First Video Game at 12',
    quote: 'At just 12 years old, Elon created and sold a simple space-themed video game called “Blastar.” It wasn’t fancy, but it was his first real step into the tech world. That tiny project sparked a lifelong passion that would eventually lead to rockets, electric cars, and changing the world.',
    points: ['Blastar Game', 'First product sold at 12', 'Future: SpaceX, Tesla, Neuralink'],
    cta: 'Read Their Journey',
    imagePosition: 'right' as const,
  },
  {
    name: 'Mark Zuckerberg',
    title: 'Coded a Fun App for Rating Photos',
    quote: 'Before Facebook, Mark built a website called “Facemash” in his dorm room — it let students rate others’ photos for fun. It was silly, controversial, and basic, but it taught him how fast things could spread online. That little app laid the groundwork for one of the biggest social platforms ever.',
    points: ['Facemash App', 'Launched from a dorm', 'Became Facebook’s starting point'],
    cta: 'Read Their Journey',
    imagePosition: 'left' as const,
  },
  {
    name: 'Bill Gates',
    title: 'Wrote First Software in High School',
    quote: 'As a teenager, Bill wrote a program to schedule classes at his school — and cheekily modified it to place himself with more girls. It was fun, smart, and useful. This early experience with solving problems using code made him fall in love with software, long before Microsoft.',
    points: ['Class Scheduler App', 'First real-world use of code', 'Led to Microsoft'],
    cta: 'Read Their Journey',
    imagePosition: 'right' as const,
  },
  {
    name: 'Steve Wozniak',
    title: 'Built a Working Computer as a Teen',
    quote: 'Woz was that kid who loved electronics more than toys. As a teenager, he built his own calculator and later a computer from scratch just for fun. That curiosity became Apple’s first computer — proof that learning by doing can build empires.',
    points: ['Homemade Computer', 'Designed Apple I', 'Started Apple in a garage'],
    cta: 'Read Their Journey',
    imagePosition: 'left' as const,
  },
  {
    name: 'Tanmay Bakshi',
    title: 'Started Programming at Age 5',
    quote: 'By the time most kids learn multiplication, Tanmay was already building iPhone apps. He became one of the youngest IBM Watson developers and now teaches others around the world — proof that it’s never too early to start coding.',
    points: ['First app at 9', 'IBM AI Developer at 12', 'Global coding mentor'],
    cta: 'Read Their Journey',
    imagePosition: 'right' as const,
  },
];

}
