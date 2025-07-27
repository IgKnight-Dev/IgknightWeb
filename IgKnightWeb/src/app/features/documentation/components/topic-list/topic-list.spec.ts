import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicList } from './topic-list';

describe('TopicList', () => {
  let component: TopicList;
  let fixture: ComponentFixture<TopicList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
