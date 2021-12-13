import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientAppointmentResolver } from '../core/resolver/patient-appointment.resolver';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { PatientAppointmentComponent } from './components/patient-appointment/patient-appointment.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "my-appointments",
    pathMatch: "full"
  }, {
    path: "my-appointments",
    component: PatientAppointmentComponent,
    resolve: {
      patient: PatientAppointmentResolver
    }
  }, {
    path: "book-appointment",
    component: BookAppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientManagementRoutingModule { }
