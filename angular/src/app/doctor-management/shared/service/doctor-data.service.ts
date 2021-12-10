import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from 'src/app/authentication/shared/service/auth.service';
import { serverAddress } from 'src/environments/environment.prod';

import { AppointmentRequest } from '../interface/request.interface';

@Injectable({
  providedIn: 'root'
})
export class DoctorDataService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getPendingRequest() {
    return this.http.get<AppointmentRequest[]>(`${serverAddress}pending-appointments/${this.authService.getUserId()}`)
  }

  getMyAppointments() {
    return this.http.get<AppointmentRequest[]>(`${serverAddress}doctor-appointments/${this.authService.getUserId()}`)

  }

  updatePendingRequest(body: AppointmentRequest) {
    return this.http.put(`${serverAddress}update-appointment`, body)
  }
}
