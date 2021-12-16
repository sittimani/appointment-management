import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { invalidPassword, MatchValidator } from 'src/app/core';
import { AuthService } from '../../shared/service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  emailAddress = ''

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  sendResetLink() {
    this.authService.sendResetLink(this.emailAddress).subscribe(result => {
      this.toastr.success(result)
      this.router.navigate(['login'])
    })
  }
}
