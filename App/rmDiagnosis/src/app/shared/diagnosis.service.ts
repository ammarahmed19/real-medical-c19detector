import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';
import { Diagnosis } from './diagnosis.model';
import { FileInput } from 'ngx-material-file-input';

export class DiagnosisService {
    private diagnosisSelected = new Subject<Diagnosis>();
    public idEmitter = new EventEmitter<number>();
    private diagnosis: Diagnosis[] = [
        new Diagnosis
        (
        0,
        'hello',
        ['COVID-19', 'Pneumonia'],
        [90, 50],
        './assets/xray.png',
        ),
        new Diagnosis
        (
        1,
        'bye',
        ['COVID-19', 'Pneumonia'],
        [40, 30],
        './assets/xray.png',
        ),
    ];

    constructor(private router: Router) {}

    // tslint:disable-next-line: typedef
    getAllDiagnosis() {
        return this.diagnosis.slice();
    }

    // tslint:disable-next-line: typedef
    getDiagnosis(id: number) {
        return this.diagnosis.slice()[id];
    }

    addDiagnosis(diagName: string, xrayImg: FileInput): void {
      // LOADING MODEL TBA HERE
      const id = this.diagnosis.length;
      const diseases = ['Disease 1', 'Diseases 2'];
      const risks = [50, 80];
      this.diagnosis.push(new Diagnosis(id, diagName, diseases, risks, 'imgSrc'));
      this.router.navigate([id.toString()]);
    }
}
