import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeSection } from './practice-section';

describe('PracticeSection', () => {
  let component: PracticeSection;
  let fixture: ComponentFixture<PracticeSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PracticeSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
