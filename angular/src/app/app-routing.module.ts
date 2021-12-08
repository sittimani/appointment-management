import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { UnauthorizedAccessComponent } from './core/components/unauthorized-access/unauthorized-access.component';
import { AuthGuard } from './core/guard/auth.guard';
import { DoctorGuard } from './core/guard/doctor.guard';
import { PatientGuard } from './core/guard/patient.guard';

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
