import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentRequest } from '../../shared/interface/request.interface';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})

export class DoctorAppointmentComponent {

  headers = ["patient", "date", "time"]
  myAppointments = []

  constructor(private activedRouted: ActivatedRoute, private changeDetector: ChangeDetectorRef) {
    console.log("doctor appointment")
    this.activedRouted.data.subscribe(result => {
      this.myAppointments = result.appointments
    })
  }
}
