import { PercentPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {faArrowUp,
  faArrowDown,
  faAngleRight,
  faAngleLeft,
  faEnvelope,
  faArrowsRotate,
  faPercent,
  faDollarSign,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  up = faArrowUp;
  down = faArrowDown;
  right = faAngleRight;
  left = faAngleLeft;
  mail = faEnvelope;
  refresh=faArrowsRotate;
  percent = faPercent;
  dollar = faDollarSign;
  user = faUser;


  public lineChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [60, 50, 80, 89, 53, 55, 40], label: 'Series B' },
  ];
  public lineChartLabels: any[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions) = {
    responsive: true,

  };
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  public lineChartColors: Array<any>  = [
    {
      borderColor: '#fff',
      backgroundColor: '#fff',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: any[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

    public barChartData: any[] = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', stack: 'a' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', stack: 'a' },
      { data: [20, 40, 30, 39, 46, 29, 30], label: 'Series C', stack: 'a' },
    ];




  constructor() { }

  ngOnInit(): void {
  }

}
