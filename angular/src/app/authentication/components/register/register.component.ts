import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {
  emailValidator,
  invalidPassword,
  MatchValidator
} from 'src/app/core';

import { Controls } from '../../shared/interface/register-controls.interface';
import { AuthService } from '../../shared/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  registrationForm!: FormGroup
  controls!: Controls

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [emailValidator]],
      password: ['', [Validators.required, invalidPassword]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: MatchValidator })
    this.setControls()
  }

  register() {
    let value = this.registrationForm.value
    value.role = "patient"
    delete value.confirmPassword
    this.authService.registerUser(value).subscribe(result => {
      this.router.navigate(["login"])     
    })
  }

  setControls() {
    this.controls = {
      name: this.registrationForm.get('name'),
      email: this.registrationForm.get('email'),
      password: this.registrationForm.get('password'),
      confirmPassword: this.registrationForm.get('confirmPassword')
    }
  }

  cancel() {
    this.router.navigate(["login"])
  }
}