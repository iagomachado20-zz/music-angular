import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../models';

@Injectable()
export class AuthService {

  private userAutenticado:boolean = false; 

  showMenu = new EventEmitter<boolean>();

  constructor(private router: Router) { }


  loginUser(usuario: Usuario) {

    if (usuario.email == 'iago@am4.com.br' && usuario.senha == '123') {

      localStorage.setItem('logado', '1');
      this.userAutenticado = true;
      this.showMenu.emit(true);
      this.router.navigate(['/home/destaques']);
      
    }
    else {
      this.userAutenticado = false;
      this.showMenu.emit(false);
    }
  }

  usuarioAuth() {
    return this.userAutenticado;
  }

}
