import { Component } from '@angular/core';
import { CodingQuestionApiService } from '../services/coding-api-service';
import { CodingQuestionSummaryDto } from '../models/coding-question.model';
import { CodingQuestionCategory, DifficultyLevel } from '../../../models/Enums';

@Component({
  selector: 'app-coding-challenges-page',
  standalone: false,
  templateUrl: './coding-challenges.page.html',
  styleUrl: './coding-challenges.page.scss'
})
export class CodingChallengesPage {
  
  constructor(private codingQuestionApiService: CodingQuestionApiService) {}

  challenges: CodingQuestionSummaryDto[] = [];
  filteredChallenges: CodingQuestionSummaryDto[] = [];
  codingCategories = Object.keys(CodingQuestionCategory).filter(key => isNaN(Number(key)));;
  difficultyLevels = Object.keys(DifficultyLevel).filter(key => isNaN(Number(key)));
  toatlChallenges: number = 0;
  easyChallenges: number = 0;
  mediumChallenges: number = 0;
  hardChallenges: number = 0;


  // Filters
  searchTerm: string = '';
  selectedDifficulty: string = 'All';
  selectedCategory: string = 'All';
  selectedSort: string = 'Popular';

  ngOnInit(): void {
    this.loadChallenges().then(challenges => {
    this.challenges = challenges;
    this.filteredChallenges = challenges;
    this.toatlChallenges = challenges.length;

    this.easyChallenges = challenges.filter(c => c.difficulty === DifficultyLevel.Easy ).length;
    this.mediumChallenges = challenges.filter(c => c.difficulty === DifficultyLevel.Medium).length;
    this.hardChallenges = challenges.filter(c => c.difficulty === DifficultyLevel.Hard).length;

    this.applyFilters();
  });
}

  applyFilters() {
        this.filteredChallenges = this.challenges
      .filter(c => {
        const matchesSearch = c.title.toLowerCase().includes(this.searchTerm.toLowerCase());
        const matchesDifficulty = this.selectedDifficulty === 'All' || DifficultyLevel[c.difficulty] === this.selectedDifficulty;
        const matchesCategory = this.selectedCategory === 'All' || CodingQuestionCategory[c.category] === this.selectedCategory;
        return matchesSearch && matchesDifficulty && matchesCategory;
      });

  }

  async loadChallenges(): Promise<CodingQuestionSummaryDto[]> {
   return await this.codingQuestionApiService.getAllQuestions();
  }

}