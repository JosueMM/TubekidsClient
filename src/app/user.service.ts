import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { usuario } from '../app/usuario';
import { Login } from './login';
import { Token } from './token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  login: Login = new Login();

  baseUrl: string = "http://localhost:3000/api/users";

  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get<usuario[]>(`${this.baseUrl}`)
      .map(user => user);
  }

  addUser(newUser: usuario) {
   
    return this.http.post<usuario>(`${this.baseUrl}`, newUser)
      .map(user => user);
  }

  LoginToken(newUser: Login) {
    return this.http.post<Token>(`http://localhost:3000/api/login`, newUser)
      .map(user => user);
  }

  LoginUser(newUser: Login) {
    return this.http.post<usuario>(`http://localhost:3000/api/login`, newUser)
      .map(user => user);
  }

  updateUser(newUser: usuario) {
    return this.http.put(`${this.baseUrl}/${newUser._id}`, newUser)
      .map(res => res);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`)
      .map(res => res);
  }

  
}
