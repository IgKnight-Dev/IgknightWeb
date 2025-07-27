import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesParent } from './courses-parent';

describe('CoursesParent', () => {
  let component: CoursesParent;
  let fixture: ComponentFixture<CoursesParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
