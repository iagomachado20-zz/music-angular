import { Injectable } from '@angular/core';
import { Playlist } from '../../models';

let PLAYLIST = [
  {
    id: 1,
    titulo: 'Descobertas da Semana',
    author: 'Cartola',
    capa: 'capa.jpg' 
  },
  {
    id: 2,
    titulo: 'Funk 2000',
    author: 'Cartola',
    capa: 'capa.jpg' 
  },
  {
    id: 3,
    titulo: 'Sertanejo',
    author: 'Cartola',
    capa: 'capa.jpg' 
  },
  {
    id: 4,
    titulo: 'Bailando',
    author: 'Cartola',
    capa: 'capa.jpg' 
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
  },
];

@Injectable()
export class PlaylistService {

  constructor() { }

  getPlaylist(): Playlist[] {
    return PLAYLIST;
  }

}
