import { Injectable } from '@angular/core';

@Injectable()
export class UtiliesService {

  constructor() { }

  validationField (campo:any) {

    return !campo.valid && campo.dirty
    
  }

  randomGradient(lista:any) {

    return lista[Math.floor(Math.random() * lista.length)]
    
  }

}
