import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var tok = localStorage.getItem("token");

    if(tok== "" || tok === null ){
      window.location.href = "../login";
    }
  }

}
