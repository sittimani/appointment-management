import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/authentication/shared/service/auth.service';
import { catchError } from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let modifiedRequest = request.clone({
      setHeaders: {
        Authorization: `Barear ${this.authService.getToken()}`
      }
    })
    return next.handle(modifiedRequest).pipe(
      catchError(error => {
        this.router.navigate(["internal-server-error"])
        return throwError(error)
      })
    )
  }
}
