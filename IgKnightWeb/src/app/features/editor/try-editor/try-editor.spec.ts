import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryEditor } from './try-editor';

describe('TryEditor', () => {
  let component: TryEditor;
  let fixture: ComponentFixture<TryEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TryEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TryEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
