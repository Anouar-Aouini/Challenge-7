import { Component, OnInit } from '@angular/core';
import { todo } from './todolist.module';
import { CalculService } from './calcul.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todolist: todo[] = [];
  public message = "";
  public msg = "";
  constructor( public calculService:CalculService) { }

  ngOnInit(): void {
    this.todolist =
      [{ "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false },
      { "userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false },
      { "userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false },
      { "userId": 1, "id": 4, "title": "quo adipisci enim quam ut ab", "completed": true }];

    this.message = this.calculService.getNumberOf(this.todolist, "completed", true)

  }

  onComplete() {
    this.msg=this.calculService.getCompletedList(this.todolist,"completed",true)
  }


}
