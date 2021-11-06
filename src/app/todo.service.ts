import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { todo } from './todo-list/todolist.module';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public listTodo:todo[] = [];
  constructor(public http:HttpClient) { }

  getTodos() {
   return this.http.get<todo[]>("https://jsonplaceholder.typicode.com/todos")
  }
  getUserTodos(id:number) {
    return this.http.get<todo[]>(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
  }

}
