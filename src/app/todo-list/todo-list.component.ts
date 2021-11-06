import { Component, OnDestroy, OnInit } from '@angular/core';
import { todo } from './todolist.module';
import { CalculService } from './calcul.service';
import { TodoService } from '../todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit,OnDestroy {
  public todolist: todo[] = [];
  private listSub!: Subscription;
  public message = "";
  public msg = "";
  public usersList = [];
  constructor( public calculService:CalculService,public todoService : TodoService) { }
  public listTodo : todo[] = [];
  ngOnInit(): void {
    this.todolist =
      [{ "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false },
      { "userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false },
      { "userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false },
      { "userId": 1, "id": 4, "title": "quo adipisci enim quam ut ab", "completed": true }];

    this.message = this.calculService.getNumberOf(this.todolist, "completed", true)
    this.listSub=this.todoService.getTodos().subscribe(data => {
      this.listTodo = data;
      console.log(this.listTodo)
    })
  }

  onComplete() {
    this.msg=this.calculService.getCompletedList(this.todolist,"completed",true)
  }
  ngOnDestroy() {
    this.listSub.unsubscribe()
  }




}
