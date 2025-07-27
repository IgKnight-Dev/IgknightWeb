import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPane } from './editor-pane';

describe('EditorPane', () => {
  let component: EditorPane;
  let fixture: ComponentFixture<EditorPane>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditorPane]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorPane);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
