import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Video } from '../video';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  video: Video;
  video2: Video;
  videos: Video[];

  constructor() { 
    this.video = new Video();
    this.video2 = new Video();
    this.videos = [];
    this.video.name = "Papelito";
    this.video.anos = 13;
    this.video.link = "https://www.youtube.com/embed/2dyqZOiP_no"
  }

  ngOnInit() {
    var tok = localStorage.getItem("token");

    if(tok== "" || tok === null ){
      window.location.href = "../login";
    }
    this.videos.push(this.video);
  }

  Ver(link:string){
    sessionStorage.setItem("link",link);
   window.location.href = "../player";

  }


}
