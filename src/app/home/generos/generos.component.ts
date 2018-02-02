import { Component, OnInit } from '@angular/core';

import { Genero } from '../../../models';
import { GenerosService } from '../../shared/services/generos.services';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.scss']
})
export class GenerosComponent implements OnInit {

  generos: Genero[] = [];
  
  constructor(private generosService: GenerosService) { }

  ngOnInit() {

    this.generos = this.generosService.getGeneros();
    
  }

}
