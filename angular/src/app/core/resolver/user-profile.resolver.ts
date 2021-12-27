import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/authentication/shared/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileResolver implements Resolve<any> {
  constructor(private authService: AuthService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.authService.getUserDetails()
  }
}
