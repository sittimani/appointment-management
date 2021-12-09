import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentRequest } from '../../shared/interface/request.interface';
import { DoctorDataService } from '../../shared/service/doctor-data.service';

@Component({
  selector: 'app-appointment-request',
  templateUrl: './appointment-request.component.html',
  styleUrls: ['./appointment-request.component.css']
})
export class AppointmentRequestComponent implements OnInit {

  isApproveButton = true
  headers = ["patient", "time"]
  requests: AppointmentRequest[] = []
  
  constructor(
    private activatedRoute: ActivatedRoute, 
    private doctorService: DoctorDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(result => {
      this.requests = result.requests
    })
  }

  approveUser(data: any) {
    const {patient_id, time} = data
    let request = this.requests.find((request)=> {
      return request.patient_id ===  patient_id && request.time === time
    })
    
    if(request){
      const result = confirm(`Do you want to confirm the appointment for ${request?.['patient'].toUpperCase()} at ${request?.time}`)
      request.status = result ? "Approved" : "Denied"
      this.doctorService.updatePendingRequest(request).subscribe(result => {
        this.router.navigate(["doctor"])
      })
      
    }  
  }
}
