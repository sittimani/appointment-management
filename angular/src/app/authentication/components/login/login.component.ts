import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm)
  }
}
