import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationCard } from './motivation-card';

describe('MotivationCard', () => {
  let component: MotivationCard;
  let fixture: ComponentFixture<MotivationCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotivationCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotivationCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
