import { Injectable, EventEmitter } from '@angular/core';
import { Playlist } from '../../../models';

let PLAYLIST = [
  {
    id: 1,
    titulo: 'Descobertas da Semana',
    author: 'Michael Jackson',
    capa: 'capa.jpg' 
  },
  {
    id: 2,
    titulo: 'Funk 2000',
    author: 'Pink Floyd',
    capa: 'capa2.jpg' 
  },
  {
    id: 3,
    titulo: 'Sertanejo',
    author: 'Maiara e Maraisa',
    capa: 'capa.jpg' 
  },
  {
    id: 4,
    titulo: 'Bailando',
    author: 'Malumma',
    capa: 'capa2.jpg' 
  },
  {
    id: 5,
    titulo: 'Sertanejo',
    author: 'Cartola',
    capa: 'capa.jpg' 
  },
  {
    id: 6,
    titulo: 'Bailando',
    author: 'Cartola',
    capa: 'capa.jpg' 
  }
];



@Injectable()
export class PlaylistService {

  emitPlayMusicNow = new EventEmitter<object>();

  constructor() { 
  }

  getPlaylist(): Playlist[] {
    return PLAYLIST;
  }

  sendPlayNow(musica:object) {
    this.emitPlayMusicNow.emit(musica);
  }

}
