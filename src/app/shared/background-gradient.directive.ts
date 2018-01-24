import { Directive, ElementRef, Renderer, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[BackgroundGradient]'
})
export class BackgroundGradientDirective implements OnInit{

  @HostBinding('style.background-image') backgroundGradient: string;

  @Input('BackgroundGradient') Color: string = "#1267a8, #196baa";
  
  constructor() {}

  ngOnInit() {

    this.getSetColor();

  }

  getSetColor() {

    this.backgroundGradient = 'linear-gradient(to bottom, ' + this.Color +')';

  }

}
