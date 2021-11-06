import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from './users/users.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers() {
    return this.http.get<Utilisateur[]>("https://jsonplaceholder.typicode.com/users")
  }

}
