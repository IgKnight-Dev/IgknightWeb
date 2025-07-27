import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPractice } from './popular-practice';

describe('PopularPractice', () => {
  let component: PopularPractice;
  let fixture: ComponentFixture<PopularPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularPractice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularPractice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
