import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassThemeComponent } from './class-theme.component';

describe('ClassThemeComponent', () => {
  let component: ClassThemeComponent;
  let fixture: ComponentFixture<ClassThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
