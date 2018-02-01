import { Injectable, EventEmitter } from '@angular/core';
import { Playlist } from '../../../models';

const PLAYLIST = [
  {
    id: 1,
    titulo: 'Descobertas da Semana',
    author: 'Michael Jackson',
    capa: 'capa4.jpg',
    musicas: [
      {
        id: 1,
        titulo: 'Get it',
        author: 'U2',
        capa: 'capa3.jpg',
      },
      {
        id: 2,
        titulo: 'Wonderwall',
        author: 'Oasis',
        capa: 'capa4.jpg',
      },
      {
        id: 3,
        titulo: 'Californication',
        author: 'Red Hot Chili Pepers',
        capa: 'capa4.jpg',
      },
      {
        id: 4,
        titulo: 'Nirvana',
        author: "In Bloom",
        capa: 'capa4.jpg',
      }    
    ] 
  },
  {
    id: 2,
    titulo: 'Funk 2000',
    author: 'Pink Floyd',
    capa: 'capa2.jpg',
    musicas: [
      {
        id: 1,
        titulo: 'Get it',
        author: 'U2',
        capa: 'capa3.jpg',
      },
      {
        id: 2,
        titulo: 'Wonderwall',
        author: 'Oasis',
        capa: 'capa4.jpg',
      },
      {
        id: 3,
        titulo: 'Californication',
        author: 'Red Hot Chili Pepers',
        capa: 'capa4.jpg',
      },
      {
        id: 4,
        titulo: 'Nirvana',
        author: "In Bloom",
        capa: 'capa4.jpg',
      }    
    ] 
  },
  {
    id: 3,
    titulo: 'Sertanejo',
    author: 'Maiara e Maraisa',
    capa: 'capa.jpg',
    musicas: [
      {
        id: 1,
        titulo: 'Get it',
        author: 'U2',
        capa: 'capa3.jpg',
      },
      {
        id: 2,
        titulo: 'Wonderwall',
        author: 'Oasis',
        capa: 'capa4.jpg',
      },
      {
        id: 3,
        titulo: 'Californication',
        author: 'Red Hot Chili Pepers',
        capa: 'capa4.jpg',
      },
      {
        id: 4,
        titulo: 'Nirvana',
        author: "In Bloom",
        capa: 'capa4.jpg',
      }    
    ]   
  },
  {
    id: 4,
    titulo: 'Bailando',
    author: 'Malumma',
    capa: 'capa2.jpg',
    musicas: [
      {
        id: 1,
        titulo: 'Get it',
        author: 'U2',
        capa: 'capa3.jpg',
      },
      {
        id: 2,
        titulo: 'Wonderwall',
        author: 'Oasis',
        capa: 'capa4.jpg',
      },
      {
        id: 3,
        titulo: 'Californication',
        author: 'Red Hot Chili Pepers',
        capa: 'capa4.jpg',
      },
      {
        id: 4,
        titulo: 'Nirvana',
        author: "In Bloom",
        capa: 'capa4.jpg',
      }    
    ]  
  },
  {
    id: 5,
    titulo: 'Sertanejo',
    author: 'Cartola',
    capa: 'capa.jpg',
    musicas: [
      {
        id: 1,
        titulo: 'Get it',
        author: 'U2',
        capa: 'capa3.jpg',
      },
      {
        id: 2,
        titulo: 'Wonderwall',
        author: 'Oasis',
        capa: 'capa4.jpg',
      },
      {
        id: 3,
        titulo: 'Californication',
        author: 'Red Hot Chili Pepers',
        capa: 'capa4.jpg',
      },
      {
        id: 4,
        titulo: 'Nirvana',
        author: "In Bloom",
        capa: 'capa4.jpg',
      }    
    ]  
  },
  {
    id: 6,
    titulo: 'Bailando',
    author: 'Cartola',
    capa: 'capa.jpg',
    musicas: [
      {
        id: 1,
        titulo: 'Get it',
        author: 'U2',
        capa: 'capa3.jpg',
      },
      {
        id: 2,
        titulo: 'Wonderwall',
        author: 'Oasis',
        capa: 'capa4.jpg',
      },
      {
        id: 3,
        titulo: 'Californication',
        author: 'Red Hot Chili Pepers',
        capa: 'capa4.jpg',
      },
      {
        id: 4,
        titulo: 'Nirvana',
        author: "In Bloom",
        capa: 'capa4.jpg',
      }    
    ]   
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

  getPlaylistById(id:number) {
    
    for (let i=0; i< PLAYLIST.length; i++) { 
       
      const playlist = PLAYLIST[i];

      if (id === playlist.id) {
        return playlist;
      }
    }
  }

}
