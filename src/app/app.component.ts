import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { AlertService } from './shared/services/alert.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'SpotyFree';
  mostrarMenu:boolean;

  alert: object = {}

  constructor(
    private authService: AuthService,
    private _alertService: AlertService
  )
  {}

  ngOnInit() {
    
    this.authService.showMenu.subscribe(
      
      mostrar => this.mostrarMenu = mostrar

    );

  }


}