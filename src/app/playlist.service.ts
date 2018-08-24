import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Playlist } from './playlist';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  baseUrl: string = "http://localhost:3000/api/playlists";

  constructor(private http: HttpClient) { }


  getPlaylist(token : string) {
    return this.http.get<Playlist[]>(`${this.baseUrl}/` ,{headers: { Authorization: token}})
      .map(user => user);
  }

  addPlaylist(newUser: Playlist, token : string) {
   
    return this.http.post<Playlist>(`${this.baseUrl}`, newUser ,{headers: { Authorization: token}})
      .map(user => user);
  }

  updatePlaylist(newUser: Playlist,token : string) {
    return this.http.put(`${this.baseUrl}/${newUser._id}`, newUser ,{headers: { Authorization: token}})
      .map(res => res);
  }

  deletePlaylist(id: number,token : string) {
    return this.http.delete(`${this.baseUrl}/${id}`,{headers: { Authorization: token}})
      .map(res => res);
  }
}
