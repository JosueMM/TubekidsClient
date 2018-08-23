import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { Video } from '../video';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../playlist';
import { perfil } from '../perfil';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  token:string;
  videos : Video[];
  play: Video[];
  playlists:Playlist[];
  perfil : perfil;
  constructor(private videoService:VideoService, private playlistService : PlaylistService) {
   this.videos = [];
   this.play = [];
   this.playlists = [];
   this.perfil = new perfil();
   }

  ngOnInit() {
    this.token = localStorage.getItem("token");

    if(this.token== "" || this.token === null ){
      window.location.href = "../login";
    }
    this.cargar();
  }

  getVideos() {
    this.videoService.getUsers(this.token)
      .subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          this.videos.push(res[i]);
        }
      });
  }

  playlist(){
    this.perfil  = JSON.parse(sessionStorage.getItem("perfil"));
    this.playlistService.getPlaylist(this.perfil._id,this.token)
    .subscribe(res =>{
          for (let i = 0; i < res.length; i++) {
            this.playlists.push(res[i]);
          }
            
    });
  }


  cargar(){
    this.getVideos();
    this.playlist();
    var id = JSON.parse(sessionStorage.getItem("perfil"))._id;
    for (let i = 0; i < this.videos.length; i++) {
     for (let j = 0; j < this.playlists.length; j++) {
       if(this.videos[i].id === this.playlists[j].videoId && this.playlists[j].userId === id){
         this.play.push(this.videos[i]);
       }
     }
    }
  }

  Ver(link:string){
      sessionStorage.setItem("link",link);
      window.location.href = "../player";
    }
  }




