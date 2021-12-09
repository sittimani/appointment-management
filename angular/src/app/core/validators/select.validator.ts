import { FormControl } from "@angular/forms";

export function selectValidator(control: FormControl) {
    const value = control.value
    return value === "No" ? { invalidSelector: { value: value } } : null
}