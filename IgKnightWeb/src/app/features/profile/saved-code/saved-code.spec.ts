import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCode } from './saved-code';

describe('SavedCode', () => {
  let component: SavedCode;
  let fixture: ComponentFixture<SavedCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavedCode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedCode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
