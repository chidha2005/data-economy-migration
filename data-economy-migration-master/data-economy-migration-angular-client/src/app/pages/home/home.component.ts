import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  chartData: any[] = [];

  requestStatusChartConfig: any;
  reconStatusChartConfig: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', active: true }];

    this.requestStatusChartConfig = {
      type: 'pie',
      title: {
        text: "REQUEST STATUS",
        align: 'center',
        margin: 20,
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: '14px'
        }
      },
      option: {
        pie: {
          expandOnClick: false
        }
      },
      height: 250,
      piechartcolor: ['#4fc6e1', '#f7b84b', '#1abc9c', "#f1556c"],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false,
      },
      tooltip: {
        x: {
          show: false
        }
      },
      grid: {
        show: false,
        padding: {
          top: 30,
          left: 0,
          right: 0,
          bottom: 0
        }
      },
      events: {
        dataPointSelection: (event, chartContext, config) => {
          this.contentClicked('request', event, chartContext, config);
        }
      },
      labels: ["Not Started", "In Progress", "Complete", "Error"]
    };

    this.reconStatusChartConfig = {
      type: 'pie',
      title: {
        text: "RECON STATUS",
        align: 'center',
        margin: 20,
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: '14px'
        }
      },
      option: {
        pie: {
          expandOnClick: false
        }
      },
      height: 250,
      piechartcolor: ['#4fc6e1', '#f7b84b', '#1abc9c', "#f1556c"],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false,
      },
      tooltip: {
        x: {
          show: false
        }
      },
      grid: {
        show: false,
        padding: {
          top: 30,
          left: 0,
          right: 0,
          bottom: 0
        }
      },
      events: {
        dataPointSelection: (event, chartContext, config) => {
          this.contentClicked('recon', event, chartContext, config);
        }
      },
      labels: ["Not Started", "In Progress", "Complete", "Error"]
    };

    this.fetchChartData();
  }

  /**
   * content refresh
   */
  contentRefresh() {
    console.log('Data refresh requested');
  }

  contentClicked(requestType, event, chartContext, config) {
    console.log(config);
    if (requestType == 'request') {
      this.router.navigate(['/app/history'], { queryParams: { status: '' } });
    }
    else if (requestType == 'recon') {
      this.router.navigate(['/app/recon']);
    }
  }

  /**
   * fetches the dashboard-2 data
   */
  private fetchChartData() {
    let res = [
      {
        "requestStatus": [5, 30, 20, 10],
        "reconStatus": [5, 30, 20, 5]
      }
    ];

    res.forEach(ele => {
      let requestStatus = Object.assign({}, this.requestStatusChartConfig, { "series": ele["requestStatus"] });
      let reconStatus = Object.assign({}, this.reconStatusChartConfig, { "series": ele["reconStatus"] });
      this.chartData.push({
        "requestStatus": requestStatus,
        "reconStatus": reconStatus
      });
    });
  };
}
