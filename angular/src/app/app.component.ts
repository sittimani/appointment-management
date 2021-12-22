import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './authentication/shared/service/auth.service';
import { Menu } from './core/interface/menu.interface';
import { MenuService } from './core/services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular';
  isLoggedIn = false;
  menuItems: Menu[] = []

  constructor(
    private authService: AuthService,
    private router: Router,
    private menuService: MenuService
  ) {
    this.menuService.getMenu()
    this.menuService.menuSubject$.subscribe(menuList => {
      this.menuItems = menuList
    })
    this.authService.isUserLoggedIn$.subscribe(isloggedIn => {
      this.isLoggedIn = isloggedIn
    })
  }

  logout() {
    this.authService.logout()
    this.menuService.getMenu()
    this.router.navigate(["login"])
  }
}
