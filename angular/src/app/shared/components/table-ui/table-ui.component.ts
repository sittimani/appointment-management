import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Items } from '../../shared/interface/table-items.interface';

@Component({
  selector: 'app-table-ui',
  templateUrl: './table-ui.component.html',
  styleUrls: ['./table-ui.component.css']
})
export class TableUiComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['modification'];
  @Input('headers') columns: string[] = [];
  @Input() items: Items[] = []

  @ViewChild(MatSort) sort!: MatSort;
  @Input() isApproveButton = false
  @Output() approveUser = new EventEmitter<string>()

  dataSource!: MatTableDataSource<Items>;

  isNoItem = false

  constructor(private _liveAnnouncer: LiveAnnouncer, private changeDetector: ChangeDetectorRef) {
    this.dataSource = new MatTableDataSource(this.items)
  }


  ngOnInit() {
    if (!this.isApproveButton)
    this.displayedColumns.pop()
    console.log(this.isApproveButton)
  }

  ngAfterViewInit() {
    this.displayedColumns.unshift(...this.columns)
    if (this.items.length === 0)
      this.isNoItem = true
    this.changeDetector.detectChanges()
    this.dataSource = new MatTableDataSource(this.items)
    this.dataSource.sort = this.sort;
    console.log(this.displayedColumns)
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      console.log(`Sorted ${sortState.direction}ending`)
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      console.log('Sorting cleared')
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  approve(id: string) {
    console.log(id)
    this.approveUser.emit(id)
  }
}
