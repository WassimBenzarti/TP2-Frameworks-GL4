import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcEnCielViewerComponent } from './arc-en-ciel-viewer.component';

describe('ArcEnCielViewerComponent', () => {
  let component: ArcEnCielViewerComponent;
  let fixture: ComponentFixture<ArcEnCielViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcEnCielViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcEnCielViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
