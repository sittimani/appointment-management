import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/authentication/shared/service/auth.service';
import { serverAddress } from 'src/environments/environment.prod';
import { Menu } from '../interface/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuSubject: BehaviorSubject<Menu[]>
  menuSubject$: Observable<Menu[]>

  constructor(private http: HttpClient, private authSerive: AuthService) {
    this.menuSubject = new BehaviorSubject<Menu[]>([{ name: "register", path: "register" }])
    this.menuSubject$ = this.menuSubject.asObservable()
  }

  getMenu() {
    let token = this.authSerive.getToken()
    if (!token) {
      token = "no token"
    }
   // console.log(token)
    this.http.get<Menu[]>(`${serverAddress}get-menu/${token}`).subscribe(menuList=> {
      this.menuSubject.next(menuList)
    })
  }
}
