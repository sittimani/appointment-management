import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './authentication/components/forgot-password/forgot-password.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { ResetPasswordComponent } from './authentication/components/reset-password/reset-password.component';
import { UserProfileComponent } from './authentication/components/user-profile/user-profile.component';
import { InternalServerErrorComponent } from './core/components/internal-server-error/internal-server-error.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { UnauthorizedAccessComponent } from './core/components/unauthorized-access/unauthorized-access.component';
import { AuthGuard } from './core/guard/auth.guard';
import { DoctorGuard } from './core/guard/doctor.guard';
import { PatientGuard } from './core/guard/patient.guard';
import { UserProfileResolver } from './core/resolver/user-profile.resolver';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent
  },
  {
    path: "reset-password/:token",
    component: ResetPasswordComponent
  },
  {
    path: "my-profile",
    component: UserProfileComponent,
    resolve: {
      user: UserProfileResolver
    }
  },
  {
    path: "update-profile",
    component: UserProfileComponent
  },
  {
    path: "change-password",
    component: ResetPasswordComponent
  },
  {
    path: "patient",
    canActivate: [AuthGuard, PatientGuard],
    loadChildren: () => import('./patient-management/patient-management.module').then(module => module.PatientManagementModule)
  },
  {
    path: "doctor",
    canActivate: [AuthGuard, DoctorGuard],
    loadChildren: () => import('./doctor-management/doctor-management.module').then(module => module.DoctorManagementModule)
  },
  {
    path: "internal-server-error",
    component: InternalServerErrorComponent
  },
  {
    path: "unauthorized-access",
    component: UnauthorizedAccessComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
