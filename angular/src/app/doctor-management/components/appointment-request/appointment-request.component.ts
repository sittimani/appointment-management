import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentRequest } from '../../shared/interface/request.interface';

@Component({
  selector: 'app-appointment-request',
  templateUrl: './appointment-request.component.html',
  styleUrls: ['./appointment-request.component.css']
})
export class AppointmentRequestComponent implements OnInit {

  isApproveButton = true
  headers = ["patient name", "time"]
  requests: AppointmentRequest[] = []
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(result => {
      this.requests = result.requests
    })
  }

  approveUser(id: string) {
    const request = this.requests.find((request)=> {
      return request.id === id
    })
    const result = confirm(`Do you want to confirm the appointment for ${request?.['patient name'].toUpperCase()} at ${request?.time}`)
    console.log(result, id, request);
    
  }
}
