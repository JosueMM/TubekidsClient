import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SonComponent } from './son/son.component';
import { RegisterComponent } from './register/register.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { VideoComponent } from './video/video.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { LogProfileComponent } from './log-profile/log-profile.component';
import { EditComponent } from './edit/edit.component';


const app_routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'son', component: SonComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profiles', component: PerfilesComponent},
  {path: 'playlist', component: PlaylistComponent},
  {path: 'video', component: VideoComponent},
  {path: 'player', component: ReproductorComponent},
  {path: 'logprofile', component: LogProfileComponent},
  {path: 'edit', component: EditComponent},
  {path:'', component: LoginComponent}
];

export const app_routing = RouterModule.forRoot(app_routes);