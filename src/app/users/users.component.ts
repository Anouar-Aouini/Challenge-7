import { Component, OnInit } from '@angular/core';
import { CalculService } from '../todo-list/calcul.service';
import { Utilisateur } from './users.module';
import { UserService } from './../user.service';
import { Subscription } from 'rxjs';
import { TodoService } from '../todo.service';
import { todo } from './../todo-list/todolist.module';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  public listUsers: Utilisateur[] = [];
  public message = "";
  public searchedName = "";
  public userSub!: Subscription;
  public userList: Utilisateur[] = [];
  public userTodos: todo[] = []
  public show = false;
  public user:Utilisateur={id:0,username:"",name:"",email:""};

  constructor(public calculService:CalculService,public userService:UserService,public todoService:TodoService) { }
  ngOnInit() {
    this.listUsers = [{ id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" },
    { id: 2, name: "Ervin Howell", username: "Bret", email: "Shanna@melissa.tv" },
      { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net" }];
    this.userService.getUsers().subscribe(data => {
      this.userList = data;
    })
  }


  onSearch(search: HTMLInputElement) {
    this.searchedName = search.value;
    this.message=this.calculService.getCompletedList(this.listUsers,"name",this.searchedName)
    this.listUsers = this.listUsers.filter(el => el.name===this.searchedName)
  }



  displayTodos(id: number) {
    this.show = true;
    this.user = this.userList.filter(el => el.id === id)[0];
    this.userList = [this.user];
    this.todoService.getUserTodos(id).subscribe(
      data => {
        this.userTodos = data;
      }
    );
  }
  allUsers() {
    this.show = false;
     this.userService.getUsers().subscribe(data => {
      this.userList = data;
      console.log(this.userList)
    })
  }

}
