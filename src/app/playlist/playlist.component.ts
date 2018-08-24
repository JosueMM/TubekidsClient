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
  token: string;
  videos: Video[];
  play: Video[];
  playlists: Playlist[];
  perfil: perfil;
  videoplay: Video;
  constructor(private videoService: VideoService, private playlistService: PlaylistService) {
    this.videos = [];
    this.play = [];
    this.playlists = [];
    this.perfil = new perfil();
    this.videoplay = new Video();
  }

  ngOnInit() {
    this.token = localStorage.getItem("token");

    if (this.token == "" || this.token === null) {
      window.location.href = "../login";
    }
    this.cargar();
  }

  getVideos() {
    var p: Video[];
    p = [];
    this.videoService.getUsers(this.token)
      .subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          p.push(res[i]);
        }
        sessionStorage.setItem("pvideo", JSON.stringify(p));
      });
  }

  playlist() {
    var g: Playlist[];
    g = [];
    this.playlistService.getPlaylist(this.token)
      .subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          g.push(res[i]);
        }
        sessionStorage.setItem("plist", JSON.stringify(g));
      });
  }


  cargar() {
    this.getVideos();
    this.playlist();


    var pvideo = JSON.parse(sessionStorage.getItem("pvideo"));
    var plist = JSON.parse(sessionStorage.getItem("plist"));

    var id = JSON.parse(sessionStorage.getItem("perfil"))._id;
    this.play = [];
    
    for (let i = 0; i < pvideo.length; i++) {
      for (let j = 0; j < plist.length; j++) {

        if ((pvideo[i]._id === plist[i].videoId )&& (plist[j].userId === id)) {
          alert(pvideo[i].name);
          this.videoplay = new Video();
          this.videoplay.name = pvideo[i].name;
          this.videoplay.url = pvideo[i].url;
          this.videoplay._id = pvideo[i]._id;
          this.play.push(this.videoplay);
        }

      }
    }
  }

  Ver(link: string) {
    sessionStorage.setItem("link", link);
    window.location.href = "../player";
  }
}




