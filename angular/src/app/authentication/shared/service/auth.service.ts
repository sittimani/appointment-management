import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { serverAddress } from 'src/environments/environment.prod';
import {
  AuthResponse,
  LoginCreditionals,
  UserCreditional
} from '../interface/auth.interface';

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

  getUserDetails() {
    const id = this.getUserId()
    return this.http.get<UserCreditional>(`${serverAddress}get-user/${id}`)
  }

  resetPassword(token: string, body: any) {
    return this.http.put<string>(`${serverAddress}reset-password/${token}`, body)
  }

  updateProfile(user: UserCreditional) {
    return this.http.put<string>(`${serverAddress}update-profile/${this.getUserId()}`, user)
  }

  isLoggedIn() {
    const token = this.getItem("token")
    this.isUserLoggedIn.next(false)
    if (token)
      this.isUserLoggedIn.next(true)
    return token
  }

  getItem(item: string) {
    let value = sessionStorage.getItem(item)
    if (!value)
      value = localStorage.getItem(item)
    if (value)
      return value
    return ""
  }

  getToken() {
    return this.getItem("token")
  }

  registerUser(body: UserCreditional) {
    return this.http.post<string>(`${serverAddress}register`, body)
  }

  saveToken(response: AuthResponse, is24Hrs: boolean) {
    if (is24Hrs)
      this.saveToLocalStorage(response)
    else
      this.saveToSessionStorage(response)
    this.isLoggedIn()
  }

  saveToLocalStorage(response: AuthResponse) {
    localStorage.setItem("token", response.token)
    localStorage.setItem("role", response.role)
    localStorage.setItem("id", response._id)
    localStorage.setItem("name", response.name)
  }

  saveToSessionStorage(response: AuthResponse) {
    sessionStorage.setItem("token", response.token)
    sessionStorage.setItem("role", response.role)
    sessionStorage.setItem("id", response._id)
    sessionStorage.setItem("name", response.name)
  }

  getUserId() {
    return this.getItem("id")
  }

  getUserRole() {
    return this.getItem("role")
  }

  getUserName() {
    return this.getItem("name")
  }

  logout() {
    this.removeItem("token")
    this.removeItem("role")
    this.removeItem("id")
    this.isLoggedIn()
  }

  removeItem(item: string) {
    sessionStorage.removeItem(item)
    localStorage.removeItem(item)
  }
}