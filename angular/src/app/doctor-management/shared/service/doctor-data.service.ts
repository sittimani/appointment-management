import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverAddress } from 'src/environments/environment.prod';
import { DoctorAppointments } from '../interface/doctor-appointments.interface';
import { AppointmentRequest } from '../interface/request.interface';

@Injectable({
  providedIn: 'root'
})
export class DoctorDataService {

  constructor(private http: HttpClient) { }

  getPendingRequest() {
    return this.http.get<AppointmentRequest[]>(`${serverAddress}pending-appointments/mani@gmail.com`)
  }

  getMyAppointments() {
    return this.http.get<AppointmentRequest[]>(`${serverAddress}doctor-appointments/mani@gmail.com`)
  }

  updatePendingRequest(body: AppointmentRequest) {
    return this.http.put(`${serverAddress}update-appointment`, body)
  }
}
