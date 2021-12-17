import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { serverAddress } from 'src/environments/environment.prod';
import { AuthResponse, LoginCreditionals, UserCreditional } from '../interface/auth.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isUserLoggedIn$: Observable<boolean>
  private isUserLoggedIn: BehaviorSubject<boolean>


  constructor(private http: HttpClient) {
    this.isUserLoggedIn = new BehaviorSubject<boolean>(false)
    this.isUserLoggedIn$ = this.isUserLoggedIn.asObservable()
    this.isLoggedIn()
  }

  login(creditionals: LoginCreditionals) {
    return this.http.post<AuthResponse>(`${serverAddress}login`, creditionals)
  }

  sendResetLink(email: string) {
    return this.http.post<string>(`${serverAddress}send-reset-link`, { email })
  }

  resetPassword(token: string, body: any) {
    return this.http.put<string>(`${serverAddress}reset-password/${token}`, body)
  }

  isLoggedIn() {
    const token = localStorage.getItem("token")
    this.isUserLoggedIn.next(false)
    if (token)
      this.isUserLoggedIn.next(true)
    return token
  }

  registerUser(body: UserCreditional) {
    return this.http.post<string>(`${serverAddress}register`, body)
  }


  saveToken(response: AuthResponse) {
    localStorage.setItem("token", response.token)
    localStorage.setItem("role", response.role)
    localStorage.setItem("id", response._id)
    this.isLoggedIn()
  }

  getUserId() {
    return localStorage.getItem("id")
  }

  getUserRole() {
    return localStorage.getItem("role")
  }

  getToken() {
    const token = localStorage.getItem("token")
    if (token)
      return token
    return ""
  }

  logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    localStorage.removeItem("id")
    this.isLoggedIn()
  }
}
