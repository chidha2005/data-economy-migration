import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-request',
    templateUrl: './request.component.html',
    styleUrls: ['./request.component.scss']
})


export class RequestComponent implements OnInit {
    breadCrumbItems: Array<{}>;

    migrationTypeOptions: any = [];
    databaseOptions: any = [];

    migrationType: any;
    databaseName: any;

    s3FilesList: any = [];
    tokenizationFilesList: any = [];

    constructor(private router: Router) { }

    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Home', path: '/app/home' }, { label: 'Request', active: true }];

        this.migrationTypeOptions = [
            { label: 'Select Migration Type', value: null },
            { label: 'Full Database', value: 'database' },
            { label: 'List of table from speadsheet (csv file)', value: 'file' }
        ];

        this.databaseOptions = [
            { label: 'Select Database', value: null },
            { label: 'Database1', value: '1' },
            { label: 'Database2', value: '2' }
        ];
    }

    fileSelectHandler(event, fileUploadRef) {
        let files = event.files;
        if (files.length > 0) {
            this.s3FilesList.push(files[0]);
        }
    }

    tokenizationFileSelectHandler(event, fileUploadRef) {
        let files = event.files;
        if (files.length > 0) {
            this.tokenizationFilesList.push(files[0]);
        }
    }

    onContinueFunction() {
        this.router.navigate(['/app/request/preview']);
    }
}
