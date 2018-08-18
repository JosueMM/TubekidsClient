import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SonComponent } from './son/son.component';
import { RegisterComponent } from './register/register.component';
import { PerfilesComponent } from './perfiles/perfiles.component';


const app_routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'son', component: SonComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profiles', component: PerfilesComponent},
  {path:'', component: HomeComponent}
];

export const app_routing = RouterModule.forRoot(app_routes);