import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercativeQuizzes } from './intercative-quizzes';

describe('IntercativeQuizzes', () => {
  let component: IntercativeQuizzes;
  let fixture: ComponentFixture<IntercativeQuizzes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntercativeQuizzes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntercativeQuizzes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
