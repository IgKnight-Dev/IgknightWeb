import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTopics } from './search-topics';

describe('SearchTopics', () => {
  let component: SearchTopics;
  let fixture: ComponentFixture<SearchTopics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchTopics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTopics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
