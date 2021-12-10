import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.isLoggedIn()) {
      const role = this.authService.getUserRole()
      if (role) {
        this.navigateToHomePage(role)
      } else {
        localStorage.clear()
      }
    }
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.loginForm).subscribe(result => {
      this.authService.saveToken(result)
      this.navigateToHomePage(result.role)
    }, error => {
      console.log(error)
    })
  }
  navigateToHomePage(role: string) {
    role === "doctor" ? this.router.navigate(["doctor"]) : this.router.navigate(["patient"])
  }

}
