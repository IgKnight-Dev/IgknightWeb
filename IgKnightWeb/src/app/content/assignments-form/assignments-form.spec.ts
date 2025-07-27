import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsForm } from './assignments-form';

describe('AssignmentsForm', () => {
  let component: AssignmentsForm;
  let fixture: ComponentFixture<AssignmentsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignmentsForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
