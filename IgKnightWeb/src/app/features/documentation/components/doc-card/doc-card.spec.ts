import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocCard } from './doc-card';

describe('DocCard', () => {
  let component: DocCard;
  let fixture: ComponentFixture<DocCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
