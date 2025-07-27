import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { difficultyMap, categoryMap } from '../../../models/Enums';
import { CodingQuestionSummaryDto } from '../models/coding-question.model';

@Component({
  selector: 'app-coding-question-list',
  standalone: false,
  templateUrl: './coding-question-list.html',
  styleUrl: './coding-question-list.scss'
})
export class CodingQuestionList {
    @Input() challenge!: CodingQuestionSummaryDto;  // ✅ Make sure this is declared!

    categoryMap = categoryMap;

    difficultyMap = difficultyMap;

    constructor(private router: Router) {
    }

    routeToCodeChallenge(): void {
        // Navigate to the coding challenge detail page
        this.router.navigate(['challenge/coding-challenges', this.challenge.id]);

    }
}