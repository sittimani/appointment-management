import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DoctorAppointments } from 'src/app/doctor-management/shared/interface/doctor-appointments.interface';

@Injectable({
  providedIn: 'root'
})
export class DoctorAppointmentResolver implements Resolve<DoctorAppointments[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DoctorAppointments[]> {
    const data = [
      {
        patient: "Manikandan",
        time: "9:00 AM"
      }, 
      {
        patient: "Manikandan Sasikumar",
        time: "9:30 AM"
      }
    ]
    return of(data)
  }
}
