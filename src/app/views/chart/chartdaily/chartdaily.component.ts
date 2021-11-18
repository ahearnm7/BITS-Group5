import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartAnimationOptions, ChartType } from 'chart.js';
import { Label, Colors } from 'ng2-charts';
import { Firestore, collectionData, collection, DocumentData, doc, setDoc } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
export interface Item { name: string; }
@Component({
  selector: 'app-chartdaily',
  templateUrl: './chartdaily.component.html',
  styleUrls: ['./chartdaily.component.scss']
})
export class ChartdailyComponent implements OnInit {

  data = this.generatelineNumbers(2, 14);
  ave = this.generateNumbers(3, 13);
  barChartData: ChartDataSets[] = [
    { data: this.data, label: 'Daily Cases', type: 'line' },
    { data: this.ave, label: 'Ave State Cases' }
  ];
  chartDataReady = false;
  barChartLabels: Label[] = ['FirstPlaceholder', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', 'LastPlaceholder'];
  barChartOptions: ChartOptions = {
    responsive: true,
    showLines: true,
    maintainAspectRatio: true,
    title: {
      text: 'Local Daily Cases',
      display: true
    },

    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{
        ticks: {

          min: '7',
          max: '18',

        }
      }], yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },

  };
  barChartColors: Colors[] = [
    {
      borderColor: '#ff9933',
      backgroundColor: '#ffe6cc',
    },
    {
      borderColor: '#999999',
      backgroundColor: '#999999',
    },

  ];
  barChartType: ChartType = 'bar';
  barChartLegend = true;

  // item$: Observable<DocumentData[]>;


  constructor(firestore: Firestore) {
    this.chartDataReady = true;
    this.dailyChart()
  }

  ngOnInit(): void {
  }
  generateNumbers(min: number, max: number) {
    let arr: number[] = [];
    for (let index = 0; index < 14; index++) {
      arr[index] = (Math.floor(min + Math.random() * (max + 3 - 2)))
    }
    return (arr)
  }
  generatelineNumbers(min: number, max: number) {
    let arr: number[] = [];
    for (let index = 0; index < 14; index++) {
      arr[index] = (Math.floor(min + Math.random() * (max + 3 - 5)))
    }
    return (arr)
  }
  dailyChart() {
    this.data = this.generatelineNumbers(4, 14);
    this.ave = this.generateNumbers(7, 17);
    this.barChartData = [
      { data: this.ave, label: 'Ave State Cases', type: 'line' },
      { data: this.data, label: 'Daily Cases' }
    ];
    this.barChartLabels = ['FirstPlaceholder', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', 'LastPlaceholder'];
    this.barChartOptions = {
      responsive: true,
      showLines: true,
      maintainAspectRatio: true,
      title: {
        text: 'Local Daily Cases',
        display: true
      },

      // We use these empty structures as placeholders for dynamic theming.
      scales: {
        xAxes: [{
          ticks: {

            min: '7',
            max: '18',

          }
        }], yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },

    };
  }
  MonthlyChart() {
    this.data = this.generatelineNumbers(2, 14);
    this.ave = this.generateNumbers(5, 30);
    this.barChartData = [{ data: this.ave, label: 'Ave State Cases', type: 'line' },
    { data: this.data, label: 'Monthly Cases' }

    ];
    this.barChartLabels = ['FirstPlaceholder', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'LastPlaceholder'];
    this.barChartOptions = {
      responsive: true,
      showLines: true,
      maintainAspectRatio: true,
      title: {
        text: 'Local Monthly Cases',
        display: true
      },

      // We use these empty structures as placeholders for dynamic theming.
      scales: {
        xAxes: [{
          ticks: {

            min: 'Nov',
            max: 'Oct',

          }
        }], yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },

    };
  }
  AllTimeChart() {
    this.data = this.generatelineNumbers(10, 50);
    this.ave = this.generateNumbers(50, 100);
    this.barChartData = [
      { data: this.ave, label: 'Ave State Cases', type: 'line' },
      { data: this.data, label: 'All Local Time Cases' }
    ];
    this.barChartLabels = ['FirstPlaceholder', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', 'LastPlaceholder'];
    this.barChartOptions = {
      responsive: true,
      showLines: true,
      maintainAspectRatio: true,
      title: {
        text: 'Local All Time Cases',
        display: true
      },

      // We use these empty structures as placeholders for dynamic theming.
      scales: {
        xAxes: [{
          ticks: {

            min: '11',
            max: '0',

          }
        }], yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },

    };
  }
}

