import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DoctorAppointments } from 'src/app/doctor-management/shared/interface/doctor-appointments.interface';
import { AppointmentRequest } from 'src/app/doctor-management/shared/interface/request.interface';
import { DoctorDataService } from 'src/app/doctor-management/shared/service/doctor-data.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorAppointmentResolver implements Resolve<AppointmentRequest[]> {
  
  constructor(private doctorService: DoctorDataService) {}

  resolve(): Observable<AppointmentRequest[]> {
    return this.doctorService.getMyAppointments()
  }
}
