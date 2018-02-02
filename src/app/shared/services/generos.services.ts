import { Injectable, EventEmitter } from '@angular/core';
import { Genero } from '../../../models';

const GENEROS = [
    {
      id: 1,
      titulo: "Blues",
      capa: "blues.jpg"
    },
    {
      id: 2,
      titulo: "Clássico",
      capa: "classico.jpg"
    },
    {
      id: 3,
      titulo: "Country",
      capa: "country.jpg"
    },
    {
      id: 4,
      titulo: "Edm/Dance",
      capa: "edm-dance.jpg"
    },
    {
      id: 5,
      titulo: "Folk",
      capa: "folk.jpg"
    },
    {
      id: 6,
      titulo: "Funk Americano",
      capa: "funk-americano.jpg"
    },
    {
      id: 7,
      titulo: "Hip-Hop",
      capa: "hip-hop.jpg"
    },
    {
      id: 8,
      titulo: "Indie",
      capa: "indie.jpg"
    },
    {
      id: 9,
      titulo: "Jazz",
      capa: "jazz.jpg"
    },
    {
      id: 10,
      titulo: "Latino",
      capa: "latino.jpg"
    },
    {
      id: 11,
      titulo: "Metal",
      capa: "metal.jpg"
    },
    {
      id: 12,
      titulo: "Mood",
      capa: "mood.jpg"
    },
    {
      id: 13,
      titulo: "Party",
      capa: "party.jpg"
    },
    {
      id: 14,
      titulo: "Pop",
      capa: "pop.jpg"
    },
    {
      id: 15,
      titulo: "Punk",
      capa: "punk.jpg"
    },
    {
      id: 16,
      titulo: "Reggae",
      capa: "reggae.jpg"
    },
    {
      id: 17,
      titulo: "Soul",
      capa: "soul.jpg"
    }
];


@Injectable()
export class GenerosService {

  constructor() { 
  }

  getGeneros(): Genero[] {
    return GENEROS;
  }


}
