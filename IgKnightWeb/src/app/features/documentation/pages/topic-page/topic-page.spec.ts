import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPage } from './topic-page';

describe('TopicPage', () => {
  let component: TopicPage;
  let fixture: ComponentFixture<TopicPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
