import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/shared/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const role = this.authService.getUserRole()
    return role === "doctor" ? true : this.unauthorizedAccess();
  }
  unauthorizedAccess() {
    console.log("called doctor")
    this.router.navigate(["unauthorized-access"])
    return false
  }
  
}
