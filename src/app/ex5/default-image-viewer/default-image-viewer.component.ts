import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-image-viewer',
  templateUrl: './default-image-viewer.component.html',
  styleUrls: ['./default-image-viewer.component.css']
})
export class DefaultImageViewerComponent implements OnInit {

  imagePath:string;

  constructor() { }

  ngOnInit() {
  }

}
