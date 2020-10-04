import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisStartComponent } from './diagnosis-start.component';

describe('DiagnosisStartComponent', () => {
  let component: DiagnosisStartComponent;
  let fixture: ComponentFixture<DiagnosisStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosisStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
