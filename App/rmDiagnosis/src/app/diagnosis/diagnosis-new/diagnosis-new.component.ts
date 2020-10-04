import { DiagnosisService } from 'src/app/shared/diagnosis.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-diagnosis-new',
  templateUrl: './diagnosis-new.component.html',
  styleUrls: ['./diagnosis-new.component.css']
})
export class DiagnosisNewComponent implements OnInit {
  diagnosisForm: FormGroup;

  constructor(private fb: FormBuilder, private diagnosisService: DiagnosisService, private route: ActivatedRoute, private router: Router) {
    this.diagnosisForm = fb.group(
      {
        hideRequired: false,
        floatLabel: 'auto',
      }
    );
   }

  ngOnInit(): void {
    this.diagnosisForm = new FormGroup({
      diagName: new FormControl(null),
      xrayImg: new FormControl(null)
    });
  }

  onSubmit(): void {
    const diagName = this.diagnosisForm.controls.diagName.value;
    const xrayImg = this.diagnosisForm.controls.xrayImg.value;
    this.diagnosisForm.reset();
    //this.diagnosisService.addDiagnosis(diagName, xrayImg);
  }

}
