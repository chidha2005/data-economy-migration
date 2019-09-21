import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recon',
  templateUrl: './recon.component.html',
  styleUrls: ['./recon.component.scss'],
  providers: []
})

/**
 * Advanced table component - handling the advanced table with navbar and content
 */
export class ReconComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;

  // Table data
  masterList: any[] = [];
  masterCols: any[];
  detailCols: any[];

  showMaster: boolean = true;
  showDetail: boolean = false;

  selectedRec: any;

  constructor() {
  }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Home', path: '/app/home' }, { label: 'Recon', active: true }];

    /**
     * fetch data
     */
    this._fetchData();


    this.masterCols = [
      { field: 'requestNo', header: 'Request No' },
      { field: 'requestedBy', header: 'Requested By' },
      { field: 'startTime', header: 'Recon Start Time' },
      { field: 'completedTime', header: 'Recon Completed Time' },
      { field: 'status', header: 'Recon Status' }
    ];

    this.detailCols = [
      { field: 'sno', header: 'Sr.no' },
      { field: 'dbName', header: 'Database Name' },
      { field: 'tableName', header: 'Table Name' },
      { field: 'sourceCount', header: 'Source Account' },
      { field: 'targetCount', header: 'Target Account' },
      { field: 'status', header: 'Status' }
    ];
  }

  /**
   * fetches the table value
   */
  _fetchData() {
    this.masterList = [
      {
        requestNo: '1000',
        requestedBy: 'John Doe',
        startTime: '12/08/2019 16:00 EST',
        completedTime: '12/08/2019 16:10 EST',
        status: 'Completed',
        details: [{
          sno: '1',
          dbName: 'AWSCloud',
          tableName: 'Customer',
          sourceCount: 20,
          targetCount: 20,
          status: 'Completed'
        },
        {
          sno: '2',
          dbName: 'AWSCloud',
          tableName: 'Sales',
          sourceCount: 40,
          targetCount: 0,
          status: 'In Process'
        },
        {
          sno: '3',
          dbName: 'AWSCloud',
          tableName: 'Product',
          sourceCount: 50,
          targetCount: 40,
          status: 'Error'
        }]
      },
      {
        requestNo: '1001',
        requestedBy: 'John Doe',
        startTime: '12/08/2019 16:00 EST',
        completedTime: '12/08/2019 16:10 EST',
        status: 'In Process',
        details: [{
          sno: '1',
          dbName: 'AWSCloud',
          tableName: 'Customer',
          sourceCount: 20,
          targetCount: 20,
          status: 'Completed'
        },
        {
          sno: '2',
          dbName: 'AWSCloud',
          tableName: 'Sales',
          sourceCount: 40,
          targetCount: 0,
          status: 'In Process'
        },
        {
          sno: '3',
          dbName: 'AWSCloud',
          tableName: 'Product',
          sourceCount: 50,
          targetCount: 40,
          status: 'Error'
        }]
      },
      {
        requestNo: '1002',
        requestedBy: 'John Doe',
        startTime: '12/08/2019 16:00 EST',
        completedTime: '12/08/2019 16:10 EST',
        status: 'Error',
        details: [{
          sno: '1',
          dbName: 'AWSCloud',
          tableName: 'Customer',
          sourceCount: 20,
          targetCount: 20,
          status: 'Completed'
        },
        {
          sno: '2',
          dbName: 'AWSCloud',
          tableName: 'Sales',
          sourceCount: 40,
          targetCount: 0,
          status: 'In Process'
        },
        {
          sno: '3',
          dbName: 'AWSCloud',
          tableName: 'Product',
          sourceCount: 50,
          targetCount: 40,
          status: 'Error'
        }]
      },
    ];
  }


  openReconDetails(selectedItem: any) {
    this.selectedRec = selectedItem;
    this.showMaster = false;
    this.showDetail = true;
  }

  cancelDetails() {
    this.selectedRec = null;
    this.showMaster = true;
    this.showDetail = false;
  }
}
