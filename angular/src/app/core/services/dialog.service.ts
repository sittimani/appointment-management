import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private value = {
    yes: "",
    no: "",
    question: ""
  }
  constructor(private dialog: MatDialog) { }

  openDialog() {
    return this.dialog.open(DialogComponent, {
      width: "390px",
      panelClass: "confirm-dialog-container",
      disableClose: true,
    })
  }

  setDetails(yesValue: string, noValue: string, question: string) {
    this.value.yes = yesValue
    this.value.no = noValue
    this.value.question = question
  }

  getDetails() {
    return this.value
  }
}
