import { Directive } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  constructor() { }
}

export function DateValidator(control: FormControl) {
  const value = control.value
  const date = new Date()
  const today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  return !(today < value) ? { invalidDate: { value: value } } : null
}