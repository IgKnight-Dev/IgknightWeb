import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaInfo } from './meta-info';

describe('MetaInfo', () => {
  let component: MetaInfo;
  let fixture: ComponentFixture<MetaInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetaInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
