import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { PatientAppointmentComponent } from './components/patient-appointment/patient-appointment.component';

const routes: Routes = [
  {
    path: "",
    component: PatientAppointmentComponent
  },
  {
    path: "my-appointments",
    component: PatientAppointmentComponent
  },
  {
    path: "book-appointment",
    component: BookAppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientManagementRoutingModule { }
