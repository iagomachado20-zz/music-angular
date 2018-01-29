import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { PlaylistComponent } from './playlist.component';
import { PlaylistDetalheComponent } from './playlist-detalhe/playlist-detalhe.component';
import { PlaylistService } from '../shared/services/playlist.service';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [PlaylistComponent, PlaylistDetalheComponent],
    declarations: [PlaylistComponent, PlaylistDetalheComponent],
    providers: [PlaylistService],
})
export class PlaylistModule { }
