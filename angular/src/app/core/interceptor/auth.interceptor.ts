import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/authentication/shared/service/auth.service';
import { catchError } from 'rxjs/operators'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let modifiedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    })
    return next.handle(modifiedRequest).pipe(
      catchError(error => {
        return this.handleError(error)
      })
    )
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 500) {
      this.router.navigate(["internal-server-error"])
    }
    this.toastr.error(error.error)
    return throwError(error)
  }
}
