import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { perfil } from '../app/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  baseUrl: string = "http://localhost:3000/api/profiles";

  constructor(private http: HttpClient) { }


  getUsers(token: string) {
    return this.http.get<perfil[]>(`${this.baseUrl}`,{headers: { Authorization: token}})
      .map(user => user);
  }

  addUser(newUser: perfil,token: string) {
   
    return this.http.post<perfil>(`${this.baseUrl}`, newUser ,{headers: { Authorization: token}})
      .map(user => user);
  }

  updateUser(newUser: perfil,token: string) {
    return this.http.put(`${this.baseUrl}/${newUser._id}`, newUser,{headers: { Authorization: token}})
      .map(res => res);
  }

  deleteUser(id: string, tok: string) {
    return this.http.delete(`${this.baseUrl}/${id}`,{headers: { Authorization: tok}})
      .map(res => res);
  }

}
