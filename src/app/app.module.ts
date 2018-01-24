import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PlaylistComponent } from './playlist/playlist.component';

import { PlaylistService } from './shared/services/playlist.service';
import { PlayerComponent } from './player/player.component';
import { BackgroundGradientDirective } from './shared/background-gradient.directive';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PlaylistComponent,
    PlayerComponent,
    BackgroundGradientDirective,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    PlaylistService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
