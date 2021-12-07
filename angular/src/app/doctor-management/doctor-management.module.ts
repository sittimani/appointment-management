import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorAppointmentComponent } from './components/doctor-appointment/doctor-appointment.component';
import { DoctorManagementRoutingModule } from './doctor-management-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AppointmentRequestComponent } from './components/appointment-request/appointment-request.component';



@NgModule({
  declarations: [
    DoctorAppointmentComponent,
    AppointmentRequestComponent
  ],
  imports: [
    CommonModule,
    DoctorManagementRoutingModule,
    SharedModule
  ]
})
export class DoctorManagementModule { }
