import { Component, OnInit } from '@angular/core';
import {perfil} from '../perfil';
import { PerfilService } from '../perfil.service';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {
current_profile:perfil;
perfiles: perfil[];
tok : string = "";

  constructor(private userService: PerfilService) { 
  this.current_profile = new perfil();
  this.perfiles = [];

  }

  ngOnInit() {
     this.tok = localStorage.getItem("token");

    if(this.tok== "" || this.tok === null ){
      window.location.href = "../login";
    }
  }

  getUsers() {
    this.userService.getUsers(this.tok)
      .subscribe(users => {
    this.current_profile = new perfil();
        this.perfiles = users;
      });
  }

  addUser() {
    
      this.userService.addUser(this.current_profile , this.tok)
        .subscribe(res => {
          this.current_profile = new perfil();
          alert("Registrado");
          this.ngOnInit();
        });
      return;
    }

    updateVideo(){
    this.userService.updateUser(this.current_profile,this.tok)
      .subscribe(res => {
        this.current_profile = new perfil();
        this.ngOnInit();
      });
  }

  deleteUser(id: number , tok) {
    this.userService.deleteUser(id,tok)
      .subscribe(res => {
        this.ngOnInit();
      });
  }

}
