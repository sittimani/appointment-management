import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AppointmentRequest } from 'src/app/doctor-management/shared/interface/request.interface';
import { PatientDataService } from 'src/app/patient-management/shared/service/patient-data.service';

@Injectable({
  providedIn: 'root'
})
export class PatientAppointmentResolver implements Resolve<AppointmentRequest[]> {

  constructor(private patientService: PatientDataService) { }

  resolve(): Observable<AppointmentRequest[]> {
    return this.patientService.patientAppointments()
  }
}
