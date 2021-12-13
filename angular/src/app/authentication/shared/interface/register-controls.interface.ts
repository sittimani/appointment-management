import { AbstractControl } from "@angular/forms";

export interface Controls {
    name: AbstractControl | null,
    email: AbstractControl | null,
    password: AbstractControl | null,
    confirmPassword: AbstractControl | null
}