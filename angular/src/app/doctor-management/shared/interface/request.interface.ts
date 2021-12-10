export interface AppointmentRequest {
    patient_id: string,
    patient: string,
    doctor?: string,
    doctor_id: string,
    time: string,
    status?: string
}
