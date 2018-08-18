import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";


import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { app_routing }from "./app.routes";
import { SonComponent } from './son/son.component';
import { RegisterComponent } from './register/register.component';
import { FootComponent } from './foot/foot.component';
import { PerfilesComponent } from './perfiles/perfiles.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    UserComponent,
    SonComponent,
    RegisterComponent,
    FootComponent,
    PerfilesComponent
  ],
  imports: [
    BrowserModule,
   app_routing,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule, 
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
