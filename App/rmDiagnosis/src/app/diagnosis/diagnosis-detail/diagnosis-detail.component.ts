import { Diagnosis } from 'src/app/shared/diagnosis.model';
import { Component, OnInit, Output, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Params} from '@angular/router';
import { DiagnosisService } from 'src/app/shared/diagnosis.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-diagnosis-detail',
  templateUrl: './diagnosis-detail.component.html',
  styleUrls: ['./diagnosis-detail.component.css']
})
export class DiagnosisDetailComponent implements OnInit {
  id: number;
  diagnosis: Diagnosis;
  idSub: Subscription;

  constructor(private diagnosisService: DiagnosisService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idSub = this.diagnosisService.idEmitter.subscribe((id: number) => {
      this.id = id;
      this.diagnosis = this.diagnosisService.getDiagnosis(this.id);
    })
  }

  ngOnDestroy(): void {
    this.idSub.unsubscribe();
  }
}
