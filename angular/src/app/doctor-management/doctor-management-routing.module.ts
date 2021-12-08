import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentRequestResolver } from '../core/resolver/appointment-request.resolver';
import { DoctorAppointmentResolver } from '../core/resolver/doctor-appointment.resolver';
import { AppointmentRequestComponent } from './components/appointment-request/appointment-request.component';
import { DoctorAppointmentComponent } from './components/doctor-appointment/doctor-appointment.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "my-appointments",
    pathMatch: "full"
  },
  {
    path: "my-appointments",
    component: DoctorAppointmentComponent,
    resolve: {
      appointments: DoctorAppointmentResolver
    }
  },
  {
    path: "requests",
    component: AppointmentRequestComponent,
    resolve: {
      requests: AppointmentRequestResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorManagementRoutingModule { }
