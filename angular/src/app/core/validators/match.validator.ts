import { AbstractControl, FormGroup } from "@angular/forms";

export function MatchValidator(fieldOne: string, fieldTwo: string) {
    return (control: FormGroup) => {
        const firstFieldControl = control.get(fieldOne)
        const secondFieldControl = control.get(fieldTwo)
        return firstFieldControl?.value === secondFieldControl?.value ? null : setError(secondFieldControl)
    }
}


function setError(control: AbstractControl | null) {
    control?.setErrors({ misMatch: { value: control?.value } })
    return null
}