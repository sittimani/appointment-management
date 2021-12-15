import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Items } from '../../shared/interface/table-items.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() headers: string[] = []
  @Input() items!: Items[]
  @Input() isApproveButton = false

  @Output() approveUser = new EventEmitter<string>()

  constructor() { }

  approve(id: string) {
    this.approveUser.emit(id)
  }
}
