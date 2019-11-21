import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-default-image-viewer',
    templateUrl: './default-image-viewer.component.html',
    styleUrls: ['./default-image-viewer.component.css']
})
export class DefaultImageViewerComponent implements OnInit {

    imagePath: string;

    constructor() {
    }

    ngOnInit() {
    }

    resetPicture() {
        this.imagePath = '';
    }

    changePicture() {
        this.imagePath = 'https://images.unsplash.com/photo-1572039863446-dd69ee840291?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80';
    }

}
