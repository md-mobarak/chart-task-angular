import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpAdAnalysisTowComponent } from './sp-ad-analysis-tow.component';

describe('SpAdAnalysisTowComponent', () => {
  let component: SpAdAnalysisTowComponent;
  let fixture: ComponentFixture<SpAdAnalysisTowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpAdAnalysisTowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpAdAnalysisTowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
