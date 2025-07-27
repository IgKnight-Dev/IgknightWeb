import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAssignments } from './all-assignments';

describe('AllAssignments', () => {
  let component: AllAssignments;
  let fixture: ComponentFixture<AllAssignments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllAssignments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAssignments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
