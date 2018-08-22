import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
  link :string = "";
   

  constructor(private sanitizer: DomSanitizer) { 
    
  }

  ngOnInit() {
    var tok = localStorage.getItem("token");

    if(tok== "" || tok === null ){
      window.location.href = "../login";
    }
 this.link = sessionStorage.getItem("link");

  }

}
