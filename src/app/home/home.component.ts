import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { Jsonp } from '@angular/http';
import { perfil } from '../perfil';
import { usuario } from '../usuario';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../playlist';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  video: Video;
  video2: Video;
  videos: Video[];
  token : string;
  perfil: perfil;
  user: usuario;
  busqueda: string;
  _isBusqueda:boolean;

  constructor(private videoService : VideoService, private playlistService : PlaylistService) { 
    this.video = new Video();
    this.video2 = new Video();
    this.videos = [];
    this.perfil = new perfil();
    this.user = new usuario();
    this.busqueda = "";
    this._isBusqueda = true;
  }

  ngOnInit() {
    this.perfil = JSON.parse(sessionStorage.getItem("perfil"));
    this.user = JSON.parse(sessionStorage.getItem("user")).user;
    if(this.perfil === null || this.perfil === undefined){
      this.perfil = new perfil();
      this.perfil.name = "Sin Perfil";
    }
    this.token = localStorage.getItem("token");

    if(this.token== "" || this.token === null ){
      window.location.href = "../login";
    }else if(this._isBusqueda){
      this.getVideos();
    }
   
    
  }


  getVideos() {
    this.videoService.getUsers(this.token)
      .subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          this.videos.push(res[i]);
        }
      });
  }

  Ver(link:string,lim: string,name:string){
    if(!(this.perfil.birthDate <= lim )){
      alert("OOPS! :(\nLo siento "+this.perfil.name+"\n"+"El video "+name+" es para mayor de "+lim);
    }else{
      sessionStorage.setItem("link",link);
      window.location.href = "../player";
    }
  }

  playlist(id:string,lim:string){
    if(!(this.perfil.birthDate <= lim )){
      alert("OOPS! :(\nLo siento "+this.perfil.name+"\n"+"El video "+name+" es para mayor de "+lim +"\nImposible que sea de tu playlist");
    }else{ 
      var play  = new Playlist();
      play.userId = this.perfil._id;
      play.videoId = id;
  
      this.playlistService.addPlaylist(play,this.token)
            .subscribe(res => {

              alert("Agregado a Favoritos");
            });
            
    }
   
  }

  edit(id:string){
    this.videoService.getUsers(this.token)
      .subscribe(users => { 
        for (let i = 0; i < users.length; i++) {
          if (users[i]._id === id) {
            sessionStorage.setItem("editVideo",JSON.stringify(users[i]));
            window.location.href = '../editVideo';
          }
        }
      });

  }

  eliminar(id : string){
    this.videoService.deleteUser(id,this.token)
    .subscribe(res => {
      alert("Video Eliminado");
      this.videos = [];
      this.ngOnInit();
    });
  }

  search(){
    if(this.busqueda === "" || this.busqueda == undefined){
alert("Busqueda erronea");
    }else{
      this.videoService.search(this.busqueda.toLowerCase(),this.token)
      .subscribe(res => {
       this.videos = res['videos'];
        this._isBusqueda = false;
        this.ngOnInit();
      });
    }
  
  }

}
