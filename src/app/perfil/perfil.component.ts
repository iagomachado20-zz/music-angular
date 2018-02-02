import { Component, OnInit } from '@angular/core';
import { UtiliesService } from '../shared/services/utilies.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  usuario: any = {}

  constructor(private utilidades: UtiliesService) { }

  ngOnInit() {
  }

  onSubmit(form) {

    console.log(form);
    
  }

  FormUtilies = {

    validation: campo => {
      return this.utilidades.validationField(campo)
    }
    
  }


}
