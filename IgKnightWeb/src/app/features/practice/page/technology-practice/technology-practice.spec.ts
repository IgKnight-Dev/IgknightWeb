import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyPractice } from './technology-practice';

describe('TechnologyPractice', () => {
  let component: TechnologyPractice;
  let fixture: ComponentFixture<TechnologyPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnologyPractice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyPractice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
