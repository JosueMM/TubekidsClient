import { Component, OnInit } from '@angular/core';
import { perfil } from '../perfil';
import { PerfilService } from '../perfil.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  current_profile : perfil;
  token:string;

  constructor(private perfilService : PerfilService) {
this.current_profile = new perfil();
   }

  ngOnInit() {
    this.token = localStorage.getItem("token");
this.current_profile = JSON.parse(sessionStorage.getItem("edit"));
  }

  edit(){
    this.perfilService.updateUser(this.current_profile,this.token)
      .subscribe(users => { 
        alert("Perfil Actualizado con exito");
        window.location.href = '../profiles';
      });

  }



}
