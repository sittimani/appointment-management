import { AbstractControl } from "@angular/forms";

export interface BookAppointment {
    doctor: AbstractControl | null,
    timeSlot: AbstractControl | null
}