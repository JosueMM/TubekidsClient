import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { Jsonp } from '@angular/http';
import { perfil } from '../perfil';
import { usuario } from '../usuario';
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

  constructor(private videoService : VideoService) { 
    this.video = new Video();
    this.video2 = new Video();
    this.videos = [];
    this.perfil = new perfil();
    this.user = new usuario();
  }

  ngOnInit() {
    this.perfil = JSON.parse(sessionStorage.getItem("perfil"));
    this.token = localStorage.getItem("token");

    if(this.token== "" || this.token === null ){
      window.location.href = "../login";
    }else{
      this.getVideos();
    }
   
    
  }



//login perfil
//prohibir videos


  getVideos() {
    this.videoService.getUsers(this.token)
      .subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          this.videos.push(res[i]);
        }
      });
  }

  Ver(link:string,lim: string){
    
    
    
    if(this.perfil.birthDate <= lim ){
      alert("No tienes la edad suficiente,te han prohibido el acceso es para mayor de "+lim);

    }else{
      sessionStorage.setItem("link",link);
      window.location.href = "../player";
    }
   

  }


}
