import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diagnosis } from '../shared/diagnosis.model';
import { DiagnosisService } from '../shared/diagnosis.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  diagnosis: Diagnosis[];

  constructor(private diagnosisService: DiagnosisService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.diagnosis = this.diagnosisService.getAllDiagnosis();
  }

}
