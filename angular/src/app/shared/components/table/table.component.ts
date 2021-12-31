import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilityService } from 'src/app/core/services/utility.service';
import { Items } from '../../shared/interface/table-items.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {

  @Input() headers: string[] = []
  @Input() items!: Items[]
  @Input() isApproveButton = false

  @Output() approveUser = new EventEmitter<string>()

  isNoItem = false

  constructor(private changeDetector: ChangeDetectorRef, private utilityService: UtilityService) { }

  ngAfterViewInit(): void {
    if (this.items.length === 0)
      this.isNoItem = true
    this.changeDetector.detectChanges()
  }

  approve(id: string) {
    this.approveUser.emit(id)
  }

  sort(field: string, way: string) {
    this.utilityService.sort(this.items, field, way)
  }
}
