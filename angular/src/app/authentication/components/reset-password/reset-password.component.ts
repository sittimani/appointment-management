import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { invalidPassword, MatchValidator } from 'src/app/core';
import { ChangePassword } from '../../shared/interface/auth.interface';
import { AuthService } from '../../shared/service/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  resetPasswordForm: FormGroup
  isChangePassword = false
  controls!: ChangePassword

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.resetPasswordForm = this.formBuilder.group({
      oldPassword: ['', [invalidPassword]],
      password: ['', [Validators.required, invalidPassword]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: MatchValidator })
    this.setControls()
    this.checkPage()
  }

  setControls() {
    this.controls = {
      oldPassword: this.resetPasswordForm.get('oldPassword'),
      password: this.resetPasswordForm.get('password'),
      confirmPassword: this.resetPasswordForm.get('confirmPassword')
    }
  }

  resetPassword() {
    console.log("reset called")
    if (this.resetPasswordForm.touched && this.resetPasswordForm.valid) {
      this.activatedRoute.paramMap.subscribe(params => {
        const token = params.get("token")
        if (token)
          this.authService.resetPassword(token, this.resetPasswordForm.value).subscribe(result => {
            this.toastr.success(result)
            this.router.navigate(["login"])
          })
      })
    }
  }

  changePassword() { 
    console.log("called")
    if(this.resetPasswordForm.touched && this.resetPasswordForm.valid){
      const formValue = this.resetPasswordForm.value
      const value = {
        oldPassword: formValue.oldPassword,
        password: formValue.password
      }
      this.authService.changePassword(value).subscribe(result => {
        this.toastr.success(result)
        this.router.navigate(["login"])
      })
    }else{
      this.toastr.warning("Invalid Form")
    }
  }

  cancel() {
    this.router.navigate(["login"])
  }

  checkPage() {
    const url = location.href
    if (url.includes("change-password"))
      return this.isChangePassword = true
    return this.controls.oldPassword?.disable()
  }

}
