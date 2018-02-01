import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Musica } from '../../models';
import { PlaylistService } from '../shared/services/playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {

  private playlist:Musica[] = [];

  @Input('titulo') 
  tituloPlaylist: string;

  @Output()
  playNow = new EventEmitter();
  
  constructor(private playlistService: PlaylistService) {}

  onSelect(musica: Musica): void {
    this.playlistService.sendPlayNow(musica);
  }

  getPlaylist() {
    this.playlist = this.playlistService.getPlaylist();
  }

  ngOnInit() {

    this.getPlaylist();
  
  }

}
