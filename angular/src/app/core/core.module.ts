import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './shared/validators/email.directive';
import { PasswordDirective } from './shared/validators/password.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    EmailDirective,
    PasswordDirective,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EmailDirective,
    PasswordDirective
  ]
})
export class CoreModule { }
