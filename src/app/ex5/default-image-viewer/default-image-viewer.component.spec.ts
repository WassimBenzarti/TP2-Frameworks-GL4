import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultImageViewerComponent } from './default-image-viewer.component';

describe('DefaultImageViewerComponent', () => {
  let component: DefaultImageViewerComponent;
  let fixture: ComponentFixture<DefaultImageViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultImageViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
