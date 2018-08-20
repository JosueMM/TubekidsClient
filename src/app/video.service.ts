import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Video } from '../app/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  baseUrl: string = "http://localhost:3000/api/videos";

  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get<Video[]>(`${this.baseUrl}`)
      .map(user => user);
  }

  addUser(newUser: Video) {
   
    return this.http.post<Video>(`${this.baseUrl}`, newUser)
      .map(user => user);
  }

  updateUser(newUser: Video) {
    return this.http.put(`${this.baseUrl}/${newUser.id}`, newUser)
      .map(res => res);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`)
      .map(res => res);
  }

}
