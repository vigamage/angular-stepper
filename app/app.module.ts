import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateProfileComponent } from './create-profile.component';
import { StepOneComponent } from './step-one.component';
import { StepTwoComponent } from './step-two.component';
import { StepThreeComponent } from './step-three.component';

import {
  MatMenuModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule, MatButtonModule,
  MatListModule, MatStepperModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule,
  MatCheckboxModule, MatSlideToggleModule
} from '@angular/material';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    BrowserAnimationsModule],
  declarations: [AppComponent, CreateProfileComponent, StepOneComponent, StepTwoComponent, StepThreeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
