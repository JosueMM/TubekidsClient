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

  baseUrl: string = "http://localhost:3000/api/perfiles";

  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get<perfil[]>(`${this.baseUrl}`)
      .map(user => user);
  }

  addUser(newUser: perfil) {
   
    return this.http.post<perfil>(`${this.baseUrl}`, newUser)
      .map(user => user);
  }

  updateUser(newUser: perfil) {
    return this.http.put(`${this.baseUrl}/${newUser.id}`, newUser)
      .map(res => res);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`)
      .map(res => res);
  }

}
