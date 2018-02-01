import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PlayerComponent } from './player/player.component';
import { BackgroundGradientDirective } from './shared/background-gradient.directive';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlaylistModule } from './playlist/playlist.module';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/guards/auth-guard';
import { PerfilModule } from './perfil/perfil.module';
import { AlertBarComponent } from './alert-bar/alert-bar.component';
import { AlertService } from './shared/services/alert.service';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BackgroundGradientDirective,
    HomeComponent,
    LoginComponent,
    PlayerComponent,
    AlertBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PlaylistModule,
    PerfilModule
  ],
  providers: [AuthService, AuthGuard, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
