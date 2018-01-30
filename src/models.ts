export class Musica {
  id: number;
  titulo: string;
  author: string;
  capa: string;
}

export class Playlist {
  id: number;
  titulo: string;
  author: string;
  capa: string;
  musicas: Musica[];
}

export class Usuario {
  nome:string;
  senha:string;
  email:string;
}