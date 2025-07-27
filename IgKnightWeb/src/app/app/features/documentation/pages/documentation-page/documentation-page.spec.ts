import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationPage } from './documentation-page';

describe('DocumentationPage', () => {
  let component: DocumentationPage;
  let fixture: ComponentFixture<DocumentationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentationPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
