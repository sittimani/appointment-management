import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent {

  headers = ["patient", "time"]
  myAppointments = []

  constructor(private activedRouted: ActivatedRoute) { 
    this.activedRouted.data.subscribe(result => {
      this.myAppointments = result.appointments
      // console.log(this.myAppointments)
    })
  }

}
