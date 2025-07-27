import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeLayout } from './practice-layout';

describe('PracticeLayout', () => {
  let component: PracticeLayout;
  let fixture: ComponentFixture<PracticeLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PracticeLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
