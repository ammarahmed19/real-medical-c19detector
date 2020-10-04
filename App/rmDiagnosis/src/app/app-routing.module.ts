import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { DiagnosisStartComponent } from './diagnosis/diagnosis-start/diagnosis-start.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosisNewComponent } from './diagnosis/diagnosis-new/diagnosis-new.component';

const appRoutes: Routes = [
    //{ path: '', redirectTo: '/diagnosis', pathMatch: 'full' },
    {path: '', component: DiagnosisStartComponent},
    {path: 'new', component: DiagnosisNewComponent},
    {path: ':id', component: DiagnosisComponent},
    ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
