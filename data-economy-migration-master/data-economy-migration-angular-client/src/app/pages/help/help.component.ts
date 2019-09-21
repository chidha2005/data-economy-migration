import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.scss']
})


export class HelpComponent implements OnInit {

    breadCrumbItems: Array<{}>;

    constructor() { }

    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Home', path: '/app/home' }, { label: 'Help', active: true }];
    }
}
