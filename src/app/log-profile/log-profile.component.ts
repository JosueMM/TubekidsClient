import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../perfil.service';
import { Login } from '../login';

@Component({
  selector: 'app-log-profile',
  templateUrl: './log-profile.component.html',
  styleUrls: ['./log-profile.component.css']
})
export class LogProfileComponent implements OnInit {
  token:string;
  log : Login;
  constructor(private perfilService : PerfilService) {
    this.log = new Login();
   }


  ngOnInit() {
    
    this.token = localStorage.getItem("token"); 

  }

  LoginPerfil(){
    
    this.perfilService.getUsers(this.token)
   
      .subscribe(users => {
        var obj = JSON.parse(sessionStorage.getItem("user"));
        for (let i = 0; i < users.length; i++) {
          if(users[i].userId === obj.user._id && users[i].userName === this.log.email && users[i].pin === this.log.password){
           sessionStorage.setItem("perfil",JSON.stringify(users[i]));
           alert("Logeado como:" + users[i].name);
           window.location.href = '../home';
           return;
          }
        }
      });
  }

}
