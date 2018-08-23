import { Component, OnInit } from '@angular/core';
import { perfil } from '../perfil';
import { PerfilService } from '../perfil.service';
import { usuario } from '../usuario';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent implements OnInit {
  tok: string = "";
  perfiles: perfil[];
  misPer: perfil[];
  user: usuario;
  constructor(private perfilService: PerfilService) {
    this.perfiles = [];
    this.misPer = [];
  }

  ngOnInit() {
    this.tok = localStorage.getItem("token");

    if (this.tok == "" || this.tok === null) {
      window.location.href = "../login";
    } else {
      this.misPerfiles();
    }
  }

  getPerfiles() {
    this.perfilService.getUsers(this.tok)
      .subscribe(users => {
        var obj = JSON.parse(sessionStorage.getItem("user"));
        
        for (let i = 0; i < users.length; i++) {
          if (users[i].userId === obj.user._id ) {
            this.misPer.push(users[i]);
          }
        }
      });
  }

  delete(id:string) {
 
    this.perfilService.deleteUser(id,this.tok)
      .subscribe(users => {
      alert("Eliminado");
      this.misPer = [];
      this.ngOnInit();
      });
  }

  update(id:string){
    this.perfilService.getUsers(this.tok)
      .subscribe(users => { 
        for (let i = 0; i < users.length; i++) {
          if (users[i]._id === id) {
            sessionStorage.setItem("edit",JSON.stringify(users[i]));
            window.location.href = '../edit';
          }
        }
      });

  }

  misPerfiles() {
    this.getPerfiles();


  }




}
