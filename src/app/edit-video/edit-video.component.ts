import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { Video } from '../video';

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.css']
})
export class EditVideoComponent implements OnInit {

  token: string;
  video : Video;
  constructor(private videoService : VideoService) { }

  ngOnInit() {
    this.token = localStorage.getItem("token");
    this.video = JSON.parse(sessionStorage.getItem("editVideo"));
    this.video._id = JSON.parse(sessionStorage.getItem("editVideo"))._id;
    
  }
  
edit(){
    this.videoService.updateUser(this.video,this.token)
      .subscribe(users => { 
        alert("Video Actualizado con exito");
        window.location.href = '../home';
      });

  }



}
