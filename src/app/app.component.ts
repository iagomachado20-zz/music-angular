import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from './shared/services/auth.service';
import { AlertService } from './shared/services/alert.service';
import { UtiliesService } from './shared/services/utilies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'SpotyFree';
  mostrarMenu:boolean;
  gradients:string[] = ["#0f4379, #000000", "#251c4d, #1f1617", "#343434, #0f0f10"];
  bgChoice:string;

  alert: object = {}

  constructor(
    private authService: AuthService,
    private _alertService: AlertService,
    private _utiliesService: UtiliesService,
    private router: Router
  )
  {}
  
  changeBg() {
    this.bgChoice = this._utiliesService.randomGradient(this.gradients);
  }


  ngOnInit() {
    
    this.authService.showMenu.subscribe(
      
      mostrar => this.mostrarMenu = mostrar

    );

    this.changeBg();

  }

}