import { Component, OnInit } from '@angular/core';
import { CalculService } from '../todo-list/calcul.service';
import { Utilisateur } from './users.module';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  public listUsers: Utilisateur[] = [];
  public message = "";
  public searchedName = "";
  constructor(public calculService:CalculService) { }
  ngOnInit() {
    this.listUsers = [{ id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" },
    { id: 2, name: "Ervin Howell", username: "Bret", email: "Shanna@melissa.tv" },
    { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net" }];
  }

  onSearch(search: HTMLInputElement) {
    this.searchedName = search.value;
    this.message=this.calculService.getCompletedList(this.listUsers,"name",this.searchedName)
    this.listUsers = this.listUsers.filter(el => el.name
      .toLocaleLowerCase()
      .includes(search.value.trim().toLocaleLowerCase()))
  }
}
