import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { invalidPassword, MatchValidator } from 'src/app/core';
import { AuthService } from '../../shared/service/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  resetPasswordForm: FormGroup
  controls!: any

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, invalidPassword]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: MatchValidator })
    this.setControls()
  }

  setControls() {
    this.controls = {
      password: this.resetPasswordForm.get('password'),
      confirmPassword: this.resetPasswordForm.get('confirmPassword')
    }
  }

  resetPassword() {
    this.activatedRoute.paramMap.subscribe(params => {
      const token = params.get("token")
      if (token)
        this.authService.resetPassword(token, this.resetPasswordForm.value).subscribe(result => {
          this.toastr.success(result)
          this.router.navigate(["login"])
        })
    })
  }

  cancel() {
    this.router.navigate(["login"])
  }


}
