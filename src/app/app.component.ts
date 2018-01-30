import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'SpotyFree';

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    
    this.authService.showMenu.subscribe(
      
      mostrar => this.mostrarMenu = mostrar

    );

  }

}
