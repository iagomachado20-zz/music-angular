import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GenerosComponent } from './generos/generos.component';
import { PlaylistComponent } from '../playlist/playlist.component';
import { PlaylistDetalheComponent } from '../playlist/playlist-detalhe/playlist-detalhe.component';
import { HomeComponent } from './home.component';
import { GenerosService } from '../shared/services/generos.services';
import { DestaquesComponent } from './destaques/destaques.component';
import { FormsModule } from '@angular/forms';
import { PlaylistModule } from '../playlist/playlist.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PlaylistModule
  ],
  declarations: [
    GenerosComponent,
    HomeComponent,
    DestaquesComponent,
  ],
  providers: [GenerosService]
})
export class HomeModule { }
