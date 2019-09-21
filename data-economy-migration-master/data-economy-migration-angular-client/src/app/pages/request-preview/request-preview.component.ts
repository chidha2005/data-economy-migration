import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-request-preview',
    templateUrl: './request-preview.component.html',
    styleUrls: ['./request-preview.component.scss'],
    providers: []
})

export class RequestPreviewComponent implements OnInit {
    // bread crum data
    breadCrumbItems: Array<{}>;

    previewCols: any[];
    previewList: any = [];

    constructor(private router: Router) { }

    ngOnInit() {
        // tslint:disable-next-line: max-line-length
        this.breadCrumbItems = [{ label: 'Home', path: '/app/home' }, { label: 'Request', active: true }, { label: 'Preview', active: true }];

        /**
         * fetch data
         */
        this._fetchData();

        this.previewCols = [
            { field: 'sno', header: 'Sr.No' },
            { field: 'dbName', header: 'DB Name' },
            { field: 'tableName', header: 'Table Name' },
            { field: 'filterCondition', header: 'Filter Condition' },
            { field: 'targetBucketName', header: 'Target Bucket Name' },
            { field: 'incrementalFlag', header: 'Incremental Flag' },
            { field: 'incrementalColumn', header: 'Incremental Column' },
            { field: 'requestStatus', header: 'Request Status' }
        ];
    }

    /**
     * fetches the table value
     */
    _fetchData() {
        this.previewList = [{
            sno: '1',
            dbName: 'DB1',
            tableName: "Table1",
            filterCondition: 'Sample Condition',
            targetBucketName: 'Bucket1',
            incrementalFlag: true,
            incrementalColumn: false
        },
        {
            sno: '2',
            dbName: 'DB1',
            tableName: "Table2",
            filterCondition: 'Sample Condition',
            targetBucketName: 'Bucket1',
            incrementalFlag: true,
            incrementalColumn: false
        },
        {
            sno: '3',
            dbName: 'DB1',
            tableName: "Table3",
            filterCondition: 'Sample Condition',
            targetBucketName: 'Bucket1',
            incrementalFlag: true,
            incrementalColumn: false
        }]
    }

    onCancelFunction() {
        this.router.navigate(['/app/request']);
    }
}
