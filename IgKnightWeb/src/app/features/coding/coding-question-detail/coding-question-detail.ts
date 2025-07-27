import { Component } from '@angular/core';
import { TabType } from '../../../models/Enums';
import { CodingChallenge } from '../../../models/coding-challenge.model';
import { ActivatedRoute } from '@angular/router';
import { CodingQuestionDto } from '../models/coding-question.model';
import { CodingQuestionApiService } from '../services/coding-api-service';

@Component({
  selector: 'app-coding-question-detail',
  standalone: false,
  templateUrl: './coding-question-detail.html',
  styleUrl: './coding-question-detail.scss'
})
export class CodingQuestionDetail {
  challenge!: CodingQuestionDto;
  activeTab: TabType = TabType.Description;
  tabTypes = TabType;

  constructor(
      private questionApi: CodingQuestionApiService,
      private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getChallenge(id).then(challenge => {
        this.challenge = challenge;
      });
    }
  }

  async getChallenge(id: string): Promise<CodingQuestionDto> {
    return await this.questionApi.getQuestionById(id);
  }

  selectTab(tab: TabType) {
    this.activeTab = tab;
  }
}
