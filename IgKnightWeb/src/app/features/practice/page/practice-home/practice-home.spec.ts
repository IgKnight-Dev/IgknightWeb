import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeHome } from './practice-home';

describe('PracticeHome', () => {
  let component: PracticeHome;
  let fixture: ComponentFixture<PracticeHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PracticeHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
