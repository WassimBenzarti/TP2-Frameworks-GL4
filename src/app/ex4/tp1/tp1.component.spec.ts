import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TP1Component } from './tp1.component';

describe('TP1Component', () => {
  let component: TP1Component;
  let fixture: ComponentFixture<TP1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TP1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
