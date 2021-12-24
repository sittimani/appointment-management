import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { PasswordDirective } from './validators/password.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InternalServerErrorComponent } from './components/internal-server-error/internal-server-error.component';
import { UnauthorizedAccessComponent } from './components/unauthorized-access/unauthorized-access.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    EmailDirective,
    PasswordDirective,
    PageNotFoundComponent,
    InternalServerErrorComponent,
    UnauthorizedAccessComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    EmailDirective,
    PasswordDirective
  ]
})
export class CoreModule { }
