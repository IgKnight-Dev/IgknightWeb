import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationHeader } from './documentation-header';

describe('DocumentationHeader', () => {
  let component: DocumentationHeader;
  let fixture: ComponentFixture<DocumentationHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentationHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentationHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
