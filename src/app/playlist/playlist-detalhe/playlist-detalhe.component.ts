import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Musica } from '../../../models';
import { PlaylistService } from '../../shared/services/playlist.service';

@Component({
  selector: 'app-playlist-detalhe',
  templateUrl: './playlist-detalhe.component.html',
  styleUrls: ['./playlist-detalhe.component.scss']
})
export class PlaylistDetalheComponent implements OnInit {

  id:string;
  inscricao:Subscription;
  playlist: any;

  constructor(
    private route: ActivatedRoute,
    private playlist_service: PlaylistService
  ){}

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.playlist = this.playlist_service.getPlaylistById(params['id']);
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onSelect(musica: Musica): void {
    this.playlist_service.sendPlayNow(musica);
  }

}
