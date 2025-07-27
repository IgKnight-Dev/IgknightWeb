import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackDetail } from './feedback-detail';

describe('FeedbackDetail', () => {
  let component: FeedbackDetail;
  let fixture: ComponentFixture<FeedbackDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
