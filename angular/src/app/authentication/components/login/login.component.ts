import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  loginForm = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    if (this.authService.isLoggedIn()) {
      const role = this.authService.getUserRole()
      role ? this.navigateToHomePage(role) : this.authService.logout()
    }
  }

  login() {
    this.authService.login(this.loginForm).subscribe(result => {
      this.authService.saveToken(result)
      this.toastr.success("Successfully Logged In!!!")
      this.navigateToHomePage(result.role)
    })
  }

  navigateToHomePage(role: string) {
    role === "doctor" ? this.router.navigate(["doctor"]) : this.router.navigate(["patient"])
  }
}