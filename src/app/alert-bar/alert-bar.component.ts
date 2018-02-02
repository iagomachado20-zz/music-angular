import { Component, OnInit, Output, Input } from '@angular/core';

import { AlertService, AlertMessage } from '../shared/services/alert.service';



@Component({
  selector: 'app-alert-bar',
  templateUrl: './alert-bar.component.html',
  styleUrls: ['./alert-bar.component.scss']
})
export class AlertBarComponent implements OnInit {

  objAlert: AlertMessage;

  constructor(private alertService: AlertService) { }

  ngOnInit() {

    this.alertService.alertStatus.subscribe((val: AlertMessage) => {

      this.objAlert = { show: val.show, message: val.message};

      setTimeout(()=>{

        this.objAlert = { show: false, message: null};

      }, 2500);

    });

  }

  closeAlert(reason: string) {

    let objCloseAlert: AlertMessage = { show: false, message: ''};
    this.alertService.showAlert(false, null);

  }

}
