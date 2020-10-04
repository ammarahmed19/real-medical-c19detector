import { DiagnosisService } from './../../shared/diagnosis.service';
import { Component, Input, OnInit } from '@angular/core';
import { Diagnosis } from 'src/app/shared/diagnosis.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() diagnosis: Diagnosis;
  @Input() index: number;

  constructor(private diagnosisService: DiagnosisService) { }

  ngOnInit(): void {
  }

}
