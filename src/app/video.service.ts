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


  getUsers(token : string) {
    return this.http.get<Video[]>(`${this.baseUrl}` ,{headers: { Authorization: token}})
      .map(user => user);
  }

  addUser(newUser: Video, token : string) {
   
    return this.http.post<Video>(`${this.baseUrl}`, newUser ,{headers: { Authorization: token}})
      .map(user => user);
  }

  updateUser(newUser: Video,token : string) {
    return this.http.put(`${this.baseUrl}/${newUser.id}`, newUser ,{headers: { Authorization: token}})
      .map(res => res);
  }

  deleteUser(id: number,token : string) {
    return this.http.delete(`${this.baseUrl}/${id}`,{headers: { Authorization: token}})
      .map(res => res);
  }

}
