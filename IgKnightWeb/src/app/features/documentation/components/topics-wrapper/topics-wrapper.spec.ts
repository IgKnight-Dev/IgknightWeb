import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsWrapper } from './topics-wrapper';

describe('TopicsWrapper', () => {
  let component: TopicsWrapper;
  let fixture: ComponentFixture<TopicsWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicsWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicsWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
