import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { selectValidator } from 'src/app/core/validators/select.validator';
import { BookAppointment } from '../../shared/interface/appointment.interface';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent {

  doctors = [
    { name: "mani" },
    { name: "mk" },
    { name: "mkd" }
  ]

  times = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
  ]
  appointmentForm: FormGroup
  controls!: BookAppointment

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.appointmentForm = this.formBuilder.group({
      doctor: ['No', [Validators.required, selectValidator]],
      timeSlot: ['No', [Validators.required, selectValidator]]
    })
    this.setControls()
  }

  bookAppointment() {
    console.log(this.appointmentForm.value);
  }

  cancel() {
    this.router.navigate(["patient"])
  }

  setControls() {
    this.controls = {
      doctor: this.appointmentForm.get('doctor'),
      timeSlot: this.appointmentForm.get('timeSlot')
    }
  }
}
