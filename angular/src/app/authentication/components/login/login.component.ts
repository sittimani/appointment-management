import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from 'src/app/core/services/menu.service';
import { LoginCreditionals } from '../../shared/interface/auth.interface';
import { AuthService } from '../../shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  loginForm = {
    email: '',
    password: '',
    is24HrsLogin: false
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private menuService: MenuService
  ) {
    if (this.authService.isLoggedIn()) {
      const role = this.authService.getUserRole()
      role ? this.navigateToHomePage(role) : this.authService.logout()
    }
  }

  login() {
    const is24Hrs = this.loginForm.is24HrsLogin
    let loginFormValue: LoginCreditionals = this.loginForm
    delete loginFormValue["is24HrsLogin"]
    this.authService.login(loginFormValue).subscribe(result => {
      this.authService.saveToken(result, is24Hrs)
      this.toastr.success("Successfully Logged In!!!")
      this.menuService.getMenu()
      this.navigateToHomePage(result.role)
    })
  }

  navigateToHomePage(role: string) {
    role === "doctor" ? this.router.navigate(["doctor"]) : this.router.navigate(["patient"])
  }

  navigate() {
    this.router.navigate(['forgot-password'])
  }
}