import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationHeader } from './motivation-header';

describe('MotivationHeader', () => {
  let component: MotivationHeader;
  let fixture: ComponentFixture<MotivationHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotivationHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotivationHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
