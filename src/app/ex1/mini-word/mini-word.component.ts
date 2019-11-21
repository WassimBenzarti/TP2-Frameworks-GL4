import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent implements OnInit {

  colour = 'Grey';
  size = '35';
  fonts:string[]= ['Arial', 'Calibri','Segoe UI','Garmound'];
  font:string;
  constructor() { }

  ngOnInit() {
    this.font = this.fonts[0];
  }

}
