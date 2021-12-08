import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {
  emailValidator,
  invalidPassword,
  MatchValidator,
  selectValidator,
  Controls
} from 'src/app/core';

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