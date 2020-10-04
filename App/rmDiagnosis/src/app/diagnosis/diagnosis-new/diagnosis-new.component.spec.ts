import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisNewComponent } from './diagnosis-new.component';

describe('DiagnosisNewComponent', () => {
  let component: DiagnosisNewComponent;
  let fixture: ComponentFixture<DiagnosisNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosisNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
