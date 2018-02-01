import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Usuario } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  doLogin() {
    this.authService.loginUser(this.usuario); 
  }
}
