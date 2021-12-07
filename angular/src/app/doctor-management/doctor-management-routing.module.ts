import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentRequestComponent } from './components/appointment-request/appointment-request.component';
import { DoctorAppointmentComponent } from './components/doctor-appointment/doctor-appointment.component';

const routes: Routes = [
  {
    path: "",
    component: DoctorAppointmentComponent
  },
  {
    path: "my-appointments",
    component: DoctorAppointmentComponent
  },
  {
    path: "requests",
    component: AppointmentRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorManagementRoutingModule { }
