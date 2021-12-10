import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCreditional } from 'src/app/authentication/shared/interface/auth.interface';
import { AuthService } from 'src/app/authentication/shared/service/auth.service';

import { AppointmentRequest } from 'src/app/doctor-management/shared/interface/request.interface';
import { serverAddress } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PatientDataService {


  constructor(private http: HttpClient, private authService: AuthService) { }

  bookAppointment(body: AppointmentRequest) {

   return this.http.post(`${serverAddress}add-appointment`, body)
  }

  patientAppointments() {
    return this.http.get<AppointmentRequest[]>(`${serverAddress}patient-appointments/${this.authService.getUserId()}`)
  }

  getDoctors() {
    return this.http.get<UserCreditional[]>(`${serverAddress}get-doctors`)
  }
}
