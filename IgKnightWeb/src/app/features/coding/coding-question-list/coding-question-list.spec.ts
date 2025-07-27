import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingQuestionList } from './coding-question-list';

describe('CodingQuestionList', () => {
  let component: CodingQuestionList;
  let fixture: ComponentFixture<CodingQuestionList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodingQuestionList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingQuestionList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
