import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appArcEnCiel]'
})
export class ArcEnCielDirective {

  @HostBinding("style.color")
  color:string;
  @HostBinding("style.border-color")
  borderColor:string;

  private colors:string[] = ["blue", "red", "cyan", "yellow", "green", "purple", "olive"];

  constructor() { }

  getRandomIndex(){
    return Math.round(Math.random() * this.colors.length)
  }

  @HostListener("keydown")
  changeColor(){
    this.color = this.colors[this.getRandomIndex()];
    this.borderColor = this.colors[this.getRandomIndex()];
  }

}
