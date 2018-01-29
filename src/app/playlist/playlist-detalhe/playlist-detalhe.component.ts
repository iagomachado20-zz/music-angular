import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-playlist-detalhe',
  templateUrl: './playlist-detalhe.component.html',
  styleUrls: ['./playlist-detalhe.component.scss']
})
export class PlaylistDetalheComponent implements OnInit {

  id:string;
  inscricao:Subscription;

  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
