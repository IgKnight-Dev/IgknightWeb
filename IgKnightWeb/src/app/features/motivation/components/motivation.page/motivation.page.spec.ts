import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationPage } from './motivation.page';

describe('MotivationPage', () => {
  let component: MotivationPage;
  let fixture: ComponentFixture<MotivationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotivationPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotivationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
