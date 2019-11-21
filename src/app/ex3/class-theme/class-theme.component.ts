import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-theme',
  templateUrl: './class-theme.component.html',
  styleUrls: ['./class-theme.component.css']
})
export class ClassThemeComponent implements OnInit {

  selectedTheme: string = "dark";
  themes: string[] = ["dark", "ocean", "light"];

  constructor() { }

  ngOnInit() {
  }

  selectTheme(theme:string){
    this.selectedTheme = theme;
  }

}
