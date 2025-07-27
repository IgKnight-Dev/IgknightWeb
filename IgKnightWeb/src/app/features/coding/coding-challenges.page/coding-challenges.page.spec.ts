import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingChallengesPage } from './coding-challenges.page';

describe('CodingChallengesPage', () => {
  let component: CodingChallengesPage;
  let fixture: ComponentFixture<CodingChallengesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodingChallengesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingChallengesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
