import { Component, OnInit } from '@angular/core';
import {Video} from '../video';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  video: Video;
  videos: Video[];
  token: string;

  constructor(private userService: VideoService) { 
 this.video = new Video();
   
  }

  ngOnInit() {
     this.token = localStorage.getItem("token");

    if(this.token== "" || this.token === null ){
      window.location.href = "../login";
    }
    
  }


  getUsers() {
    this.userService.getUsers(this.token)
      .subscribe(users => {
    this.video = new Video();
        this.videos = users;
      });
  }

  addUser() {
    
      this.userService.addUser(this.video,this.token)
        .subscribe(res => {
          this.video = new Video();
          alert("Video Registrado");
          this.ngOnInit();
        });
      return;
    }

    updateVideo(){
    this.userService.updateUser(this.video,this.token)
      .subscribe(res => {
        this.video = new Video();
        this.ngOnInit();
      });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id,this.token)
      .subscribe(res => {
        this.ngOnInit();
      });
  }


}
