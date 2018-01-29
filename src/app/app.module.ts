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


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BackgroundGradientDirective,
    HomeComponent,
    LoginComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PlaylistModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
