import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './authentication/shared/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  isDoctor = false;
  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isUserLoggedIn$.subscribe(isloggedIn => {
      this.isLoggedIn = isloggedIn
      if (isloggedIn)
        this.isDoctor = this.authService.getUserRole() === "doctor" ? true : false
    })
    console.log(this.isDoctor, this.isLoggedIn);
    
  } 

  logout() {
    localStorage.clear()
    this.authService.isLoggedIn()
    this.router.navigate(["login"])
  }
}
