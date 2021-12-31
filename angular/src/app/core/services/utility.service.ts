import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  public field: string = ""
  constructor() { }

  sort(array: any[], field1: string, way: string) {
    this.field = field1
    if (way.includes("-")) {
      return array.sort((a, b) => { return a[field1] > b[field1] ? 1 : -1 })
    }
    return array.sort(this.acendingSort)
  }

  acendingSort(a: any, b: any) {
    return a > b ? 1 : -1
  }

  decendingSort(a: any, b: any) {
    return a < b ? 1 : -1
  }
}
