import { DiagnosisService } from './shared/diagnosis.service';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResultsComponent } from './results/results.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MaterialFileInputModule } from 'ngx-material-file-input';
import { AlertModule } from 'ngx-bootstrap/alert';

import { NgxElectronModule } from 'ngx-electron';

import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { ResultComponent } from './results/result/result.component';
import { DiagnosisStartComponent } from './diagnosis/diagnosis-start/diagnosis-start.component';
import { DiagnosisDetailComponent } from './diagnosis/diagnosis-detail/diagnosis-detail.component';
import { DiagnosisNewComponent } from './diagnosis/diagnosis-new/diagnosis-new.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultsComponent,
    DiagnosisComponent,
    ResultComponent,
    DiagnosisStartComponent,
    DiagnosisDetailComponent,
    DiagnosisNewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialFileInputModule,
    NgxElectronModule,
    AlertModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DiagnosisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
