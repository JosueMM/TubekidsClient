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

  constructor(private userService: PerfilService) { 
  this.current_profile = new perfil();
  this.perfiles = [];

  }

  ngOnInit() {
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(users => {
    this.current_profile = new perfil();
        this.perfiles = users;
      });
  }

  addUser() {
    
      this.userService.addUser(this.current_profile)
        .subscribe(res => {
          this.current_profile = new perfil();
          this.ngOnInit();
        });
      return;
    }

    updateVideo(){
    this.userService.updateUser(this.current_profile)
      .subscribe(res => {
        this.current_profile = new perfil();
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
