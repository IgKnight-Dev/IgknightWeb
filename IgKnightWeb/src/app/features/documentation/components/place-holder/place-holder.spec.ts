import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceHolder } from './place-holder';

describe('PlaceHolder', () => {
  let component: PlaceHolder;
  let fixture: ComponentFixture<PlaceHolder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaceHolder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceHolder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
