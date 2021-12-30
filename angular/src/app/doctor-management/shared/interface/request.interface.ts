export interface AppointmentRequest {
    _id?: string,
    patient_id: string,
    patient: string,
    doctor_id: string,
    time: string,
    date: string,
    doctor?: string,
    status?: string
}
