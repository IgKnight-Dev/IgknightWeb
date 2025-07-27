import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyTabs } from './technology-tabs';

describe('TechnologyTabs', () => {
  let component: TechnologyTabs;
  let fixture: ComponentFixture<TechnologyTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnologyTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
