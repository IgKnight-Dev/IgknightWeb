import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechPreviewGrid } from './tech-preview-grid';

describe('TechPreviewGrid', () => {
  let component: TechPreviewGrid;
  let fixture: ComponentFixture<TechPreviewGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechPreviewGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechPreviewGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
