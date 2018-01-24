import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PlaylistComponent } from './playlist/playlist.component';

import { PlaylistService } from './shared/services/playlist.service';
import { PlayerComponent } from './player/player.component';
import { BackgroundGradientDirective } from './shared/background-gradient.directive';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PlaylistComponent,
    PlayerComponent,
    BackgroundGradientDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
