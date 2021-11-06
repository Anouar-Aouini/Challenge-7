import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }

  getNumberOf(list: any[], critiria: string, value: any) {
    return `Number of todos where ${critiria} = ${value} is equal to ${list.filter(el=>el[critiria]===value).length}`
  }

  getCompletedList(list: any[], critiria: string, value: any) {
    return `${list.filter(el=>el[critiria]===value).length} out of ${list.length}`
   }

}
