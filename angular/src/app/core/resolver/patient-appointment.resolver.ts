import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

import { catchError, delay } from 'rxjs/operators'
import { PatientAppointment } from 'src/app/patient-management/shared/interface/patient-appointment.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientAppointmentResolver implements Resolve<PatientAppointment[]> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PatientAppointment[]> {
    console.log("called");
    
    const data = [
      {
        doctor: "Manikandan",
        time: "9:00 AM",
        status: "Approved"
      },
      {
        doctor: "Manikandan Sasikumar",
        time: "9:30 AM",
        status: "Approved"
      }
    ]
    return of(data).pipe(
      delay(3000),
      catchError((error) => {

        return throwError(error)
      })
    );
  }
}
