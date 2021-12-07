import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientAppointmentComponent } from './components/patient-appointment/patient-appointment.component';
import { PatientManagementRoutingModule } from './patient-management-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PatientAppointmentComponent,
    BookAppointmentComponent
  ],
  imports: [
    CommonModule,
    PatientManagementRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PatientManagementModule { }
