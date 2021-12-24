import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public value = {
    yes: "",
    no: "",
    question: ""
  }

  constructor( private matDialog: MatDialogRef<DialogComponent>, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.value = this.dialogService.getDetails()
  }

  closeDialog() {
    this.matDialog.close()

  }

}
