import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBlock } from './code-block';

describe('CodeBlock', () => {
  let component: CodeBlock;
  let fixture: ComponentFixture<CodeBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
