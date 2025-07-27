import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTabs } from './question-tabs';

describe('QuestionTabs', () => {
  let component: QuestionTabs;
  let fixture: ComponentFixture<QuestionTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
