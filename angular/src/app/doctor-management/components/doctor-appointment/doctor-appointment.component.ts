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
    console.log("doctor appointment")
    this.activedRouted.data.subscribe(result => {
      this.myAppointments = result.appointments
    })
  }
}
