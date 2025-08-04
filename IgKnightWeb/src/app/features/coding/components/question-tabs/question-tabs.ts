import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CodingQuestionDto, CodingTestCaseDto } from '../../models/coding-question.model';
import { DifficultyLevel } from '../../../../models/Enums';
import { CodingQuestionApiService } from '../../services/coding-api-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-tabs',
  standalone: false,
  templateUrl: './question-tabs.html',
  styleUrl: './question-tabs.scss'
})
export class QuestionTabs {
  @Input() challengeId!: string;
  challenge!: CodingQuestionDto;

  tabs: string[] = ['Description', 'Examples', 'Hints', 'Solution'];
  activeTab: string = 'Description';
  difficultyLevels = Object.keys(DifficultyLevel).filter(key => isNaN(Number(key)));
  difficultyMap = {
    [DifficultyLevel.Easy]: { label: 'Beginner', class: 'bg-green-100 text-green-700' },
    [DifficultyLevel.Medium]: { label: 'Intermediate', class: 'bg-yellow-100 text-yellow-700' },
    [DifficultyLevel.Hard]: { label: 'Expert', class: 'bg-red-100 text-red-600' },
  };

  sampleTestCase: CodingTestCaseDto[] = [];

  constructor(private questionApi: CodingQuestionApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    if(this.challenge == null){
    this.getChallenge(id).then(challenge => {
      this.challenge = challenge;

      // Now that challenge is available, safely load test cases
      this.loadSampleTestCases(challenge.id).then(testCases => {
        this.sampleTestCase = testCases;
      });
    });
  }
  }
}

  async getChallenge(id: string): Promise<CodingQuestionDto> {
    return await this.questionApi.getQuestionById(id);
  }

  async loadSampleTestCases(id: string): Promise<CodingTestCaseDto[]> {
    return await this.questionApi.getSampleTestCasesByQuestionId(id);
  }
}
