import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingChallengesHeader } from './coding-challenges-header';

describe('CodingChallengesHeader', () => {
  let component: CodingChallengesHeader;
  let fixture: ComponentFixture<CodingChallengesHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodingChallengesHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingChallengesHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
