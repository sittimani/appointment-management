import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppointmentRequest } from 'src/app/doctor-management/shared/interface/request.interface';

@Injectable({
  providedIn: 'root'
})
export class AppointmentRequestResolver implements Resolve<AppointmentRequest[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AppointmentRequest[]> {

    const data =  [
      {
        "id": "123",
        "patient name": "mani",
        "time" : "10:00 AM"
      }
    ]

    return of(data);
  }
}
