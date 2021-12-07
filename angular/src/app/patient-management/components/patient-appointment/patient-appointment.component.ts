import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent implements OnInit {

  headers = ["doctor", "time", "status"]
  myAppointments = [
    {
      doctor: "Manikandan",
      time: "9:00 AM",
      status: "Approved"
    }, 
    {
      doctor: "Manikandan Sasikumar",
      time: "9:30 AM",
      status: "Approved"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
