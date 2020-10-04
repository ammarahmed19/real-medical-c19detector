import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DiagnosisService } from '../shared/diagnosis.service';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  id = -1;

  constructor(private diagnosisService: DiagnosisService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params: Params) => {
      this.id = +params.id;
      console.log('id: ' + this.id);
      this.diagnosisService.idEmitter.emit(this.id);
  });

  }

}
