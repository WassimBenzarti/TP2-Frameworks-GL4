import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'tp2project';
    exerciceNumber = 0;

    exercices = new Array(5).fill(1);

    constructor(private activatedRoute: ActivatedRoute) {
        this.activatedRoute.url.subscribe(() => {
            const location = window.location.pathname;
            // tslint:disable-next-line:radix
            this.exerciceNumber = parseInt(location.replace('/', ''));

        });
    }

    ngOnInit(): void {
    }
}
