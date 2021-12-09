import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AuthResponse, LoginCreditionals } from '../interface/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn$: Observable<boolean>
  private isUserLoggedIn: BehaviorSubject<boolean>


  constructor() {
    this.isUserLoggedIn = new BehaviorSubject<boolean>(false)
    this.isUserLoggedIn$ = this.isUserLoggedIn.asObservable()
    this.isLoggedIn()
  }

  login(creditionals: LoginCreditionals) {
    const data = {
      token: "something",
      role: "doctor"
    }
    return of(data)
  }

  isLoggedIn() {
    const token = localStorage.getItem("token")
    if (token)
      this.isUserLoggedIn.next(true)
    else
      this.isUserLoggedIn.next(false)
    return token
  }


  saveToken(response: AuthResponse) {
    localStorage.setItem("token", response.token)
    localStorage.setItem("role", response.role)
    this.isLoggedIn()
  }

  getUserRole() {
    return localStorage.getItem("role")
  }
}
