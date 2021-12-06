import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[emailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true
    }
  ]
})
export class EmailDirective implements Validator {

  constructor() { }

  validate(control: FormControl) {
    return emailValidator(control)
  }
}

export function emailValidator(control: FormControl) {
  const value = control.value
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(value) ? null : { invalidEmail: { value: value } }
}
