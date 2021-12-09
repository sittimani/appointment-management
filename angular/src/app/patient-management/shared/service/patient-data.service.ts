import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppointmentRequest } from 'src/app/doctor-management/shared/interface/request.interface';
import { serverAddress } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PatientDataService {

  constructor(private http: HttpClient) { }

  bookAppointment(body: any) {
   return this.http.post(`${serverAddress}add-appointment`, body)
  }

  patientAppointments() {
    return this.http.get<AppointmentRequest[]>(`${serverAddress}patient-appointments/manikandansitti@gmail.com`)
  }
}
