import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentRequest } from 'src/app/doctor-management/shared/interface/request.interface';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent {

  headers = ["doctor", "time", "status"]
  myAppointments: AppointmentRequest[] = []

  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.data.subscribe(result => {
      this.myAppointments = result.product
    })
  }
}
