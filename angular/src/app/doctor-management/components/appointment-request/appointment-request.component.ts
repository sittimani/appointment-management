import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'src/app/core/services/dialog.service';
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
    private router: Router,
    private toastr: ToastrService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(result => {
      this.requests = result.requests
    })
  }

  approveUser(id: string) {
    let request = this.requests.find((request) => {
      return request._id === id
    })
    if (request) {
      const result = confirm(`Do you want to confirm the appointment for ${request?.['patient'].toUpperCase()} at ${request?.time}`)
      request.status = result ? "Approved" : "Denied"
      delete request._id
      this.doctorService.updatePendingRequest(id, request).subscribe(result => {
        this.toastr.success("Successfully permission updated !!!")
        this.router.navigate(["doctor"])
      })
    }
  }

  getConfirmation(request: AppointmentRequest) {
    const question = `Do you want to confirm the appointment for ${request?.['patient'].toUpperCase()} at ${request?.time}`
    this.dialogService.setDetails("Confirm", "Cancel", question)
    this.dialogService.openDialog().afterClosed().subscribe(result => {
      if(result)
        request.status = "Approved"
      if(result === false)
        request.status = "Denied"
      
    })
  }
}