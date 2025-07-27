import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProTip } from './pro-tip';

describe('ProTip', () => {
  let component: ProTip;
  let fixture: ComponentFixture<ProTip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProTip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProTip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
