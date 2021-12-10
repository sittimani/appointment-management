import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCreditional } from 'src/app/authentication/shared/interface/auth.interface';
import { AuthService } from 'src/app/authentication/shared/service/auth.service';
import { selectValidator } from 'src/app/core/validators/select.validator';
import { BookAppointment } from '../../shared/interface/appointment.interface';
import { PatientDataService } from '../../shared/service/patient-data.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent {


  doctors: UserCreditional[] = []


  times: string[] = []
  appointmentForm: FormGroup
  controls!: BookAppointment

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private patientService: PatientDataService,
    private authService: AuthService
  ) {
    this.appointmentForm = this.formBuilder.group({
      doctor_id: ['No', [Validators.required, selectValidator]],
      time: ['No', [Validators.required, selectValidator]]
    })
    this.setControls()
    this.getAvailableDoctors()
  }

  getAvailableDoctors() {
    this.patientService.getDoctors().subscribe(result => {
      this.doctors = result
    })
  }

  bookAppointment() {
    let data = this.appointmentForm.value
    data.patient_id = this.authService.getUserId()
    const temp = this.doctors.find((doctor: UserCreditional) => {
      return doctor._id === data.doctor_id
    })
    if (temp)
      data.doctor = temp.name
    data.status = "pending"
    this.patientService.bookAppointment(data).subscribe(result => {
      this.router.navigate(["patient/my-appointments"])
    })
  }

  cancel() {
    this.router.navigate(["patient"])
  }

  setControls() {
    this.controls = {
      doctor: this.appointmentForm.get('doctor_id'),
      timeSlot: this.appointmentForm.get('time')
    }
    this.times = [
      "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
      "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
      "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    ]
  }
}
