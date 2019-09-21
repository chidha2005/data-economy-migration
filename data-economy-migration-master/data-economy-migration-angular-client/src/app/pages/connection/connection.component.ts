import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-connection',
    templateUrl: './connection.component.html',
    styleUrls: ['./connection.component.scss']
})


export class ConnectionComponent implements OnInit {

    breadCrumbItems: Array<{}>;

    constructor() { }

    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Home', path: '/app/home' }, { label: 'Settings', active: true }, { label: 'Connection', active: true }];
    }
}
