import { Component, OnInit } from '@angular/core';

import { PlaylistService } from '../shared/services/playlist.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  musicPlayNow:object;

  constructor(private PlaylistService: PlaylistService) { }

  ngOnInit() {

    this.PlaylistService.emitPlayMusicNow.subscribe(
      musica => this.musicPlayNow = musica
    );
  }

}
