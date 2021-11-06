import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }

  getNumberOf(list: any[], critiria: string, value: any) {
    return `Nomber of elements where ${critiria} is equal to ${value} = ${list.filter(el=>el[critiria]===value).length}`
  }

  getCompletedList(list: any[], critiria: string, value: any) {
    return ` = ${list.filter(el=>el[critiria]===value).length}/${list.length}`
   }

}
