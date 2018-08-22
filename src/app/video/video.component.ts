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

  constructor(private userService: VideoService) { 
 
   
  }

  ngOnInit() {
    var tok = localStorage.getItem("token");

    if(tok== "" || tok === null ){
      window.location.href = "../login";
    }
    
  }


  getUsers() {
    this.userService.getUsers()
      .subscribe(users => {
    this.video = new Video();
        this.videos = users;
      });
  }

  addUser() {
    
      this.userService.addUser(this.video)
        .subscribe(res => {
          this.video = new Video();
          this.ngOnInit();
        });
      return;
    }

    updateVideo(){
    this.userService.updateUser(this.video)
      .subscribe(res => {
        this.video = new Video();
        this.ngOnInit();
      });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
      .subscribe(res => {
        this.ngOnInit();
      });
  }


}
