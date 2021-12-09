import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Items } from '../../shared/interface/table-items.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() headers: string[] = []
  @Input() items!: Items[]
  @Input() isApproveButton = false

  @Output() approveUser = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  approve(patient_id: string, time: string) {
    this.approveUser.emit({patient_id, time})
   // console.log(id)
  }
}
