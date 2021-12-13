import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[passwordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordDirective,
      multi: true
    }
  ]
})

export class PasswordDirective implements Validator {

  constructor() { }

  validate(control: FormControl) {
    return invalidPassword(control)
  }
}

export function invalidPassword(control: FormControl) {
  const value = control.value;
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
  return regex.test(value) ? null : { invalidPassword: { value: value } }
}
