import { Component, OnInit } from '@angular/core';
import {usuario} from '../usuario'
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passregistration: string;
  current_user: usuario;
  users: usuario[];


  constructor(private userService: UserService) { 
     this.passregistration = "";
    this.current_user = new usuario();
    this.users = [];
  }

  ngOnInit() {

  }

  registrar(){
    alert(this.current_user.fecha);
    var fecha = new Date();
   var ano = fecha.getFullYear();
   var fecha_user = this.current_user.fecha.slice(0,-6);
   

   if(ano - parseInt(fecha_user) >= 18){
     this.validar()
    
   }else{
     alert("Eres menor de edad no puedes registrarte");
   }
  

  }

  validar(){
    if(this.current_user.name == "" || this.current_user.name == " "){
alert("Debes llenar todos los campos, nombre esta vacio");
    }else if (this.current_user.lastname == "" || this.current_user.lastname == " "){
      alert("Debes llenar todos los campos, Apellido esta vacio");
    }else if (this.current_user.email == "" || this.current_user.email == " "){
      alert("Debes llenar todos los campos, Email esta vacio");
    }else if(this.current_user.country == "" || this.current_user.country == " "){
      alert("Debes llenar todos los campos, Pais esta vacio");
    }else if(this.current_user.fecha == "mm/dd/yyy" || this.current_user.fecha == " "){
      alert("Debes llenar todos los campos, Fecha esta vacia");
    }else if (this.current_user.password == "" || this.current_user.password == " "){
      alert("Debes llenar todos los campos, contrasena esta vacia");
    }else if(this.current_user.password != this.passregistration){
        alert("Contrasenas no coinciden");
    }else{
      if(this.validarEmail(this.current_user.email)){
    
        alert("Registrado");
      }else{
        alert("La dirección de email "+this.current_user.email +" es incorrecta.");
      }
      
    }
  }


   validarEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
  }


  getUsers() {
    this.userService.getUsers()
      .subscribe(users => {
    this.current_user = new usuario();
        this.users = users;
      });
  }

  addUser() {
    
      this.userService.addUser(this.current_user)
        .subscribe(res => {
          this.current_user = new usuario();
          this.ngOnInit();
        });
      return;
    }

    updateVideo(){
    this.userService.updateUser(this.current_user)
      .subscribe(res => {
        this.current_user = new usuario();
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
