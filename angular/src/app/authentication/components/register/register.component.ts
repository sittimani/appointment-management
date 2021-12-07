import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Controls } from 'src/app/core/shared/interface/register-controls.interface';
import { emailValidator } from 'src/app/core/shared/validators/email.directive';
import { MatchValidator } from 'src/app/core/shared/validators/match.validator';
import { invalidPassword } from 'src/app/core/shared/validators/password.directive';
import { selectValidator } from 'src/app/core/shared/validators/select.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registrationForm!: FormGroup
  controls!: Controls

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      team: ['No', [Validators.required, selectValidator]],
      email: ['', [emailValidator]],
      password: ['', [Validators.required, invalidPassword]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: MatchValidator })
    this.setControls()
  }

  register() {
    console.log(this.registrationForm.value);
  }

  setControls() {
    this.controls = {
      name: this.registrationForm.get('name'),
      team: this.registrationForm.get('team'),
      email: this.registrationForm.get('email'),
      password: this.registrationForm.get('password'),
      confirmPassword: this.registrationForm.get('confirmPassword')
    }
  }

  cancel() {
    this.router.navigate(["login"])
  }
}