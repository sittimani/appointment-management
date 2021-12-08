import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

export function MatchValidator(control: FormGroup) {
    const passwordControl = control.get('password')
    const confirmPasswordControl = control.get('confirmPassword')
    return passwordControl?.value === confirmPasswordControl?.value ? null : setError(confirmPasswordControl)
}

function setError(control: AbstractControl | null) {   
    control?.setErrors({ misMatch: { value: control?.value } })
    return null
}