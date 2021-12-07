import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit {

  headers = ["patient", "time"]
  myAppointments = [
    {
      patient: "Manikandan",
      time: "9:00 AM"
    }, 
    {
      patient: "Manikandan Sasikumar",
      time: "9:30 AM"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
