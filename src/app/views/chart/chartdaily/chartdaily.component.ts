import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartAnimationOptions, ChartType } from 'chart.js';
import { Label, Colors } from 'ng2-charts';
@Component({
  selector: 'app-chartdaily',
  templateUrl: './chartdaily.component.html',
  styleUrls: ['./chartdaily.component.scss']
})
export class ChartdailyComponent implements OnInit {

  barChartData: ChartDataSets[] = [{ data: [30, 50, 50, 60, 60, 65, 50, 52, 60, 50, 50, 50, 40, 38], label: 'Average Cases', type: "line" },

  { data: [0, 65, 59, 60, 70, 88, 75, 77, 59, 55, 55, 54, 40, 0], label: 'Local Cases' }



  ];
  barChartLabels: Label[] = ['FirstPlaceholder', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'LastPlaceholder'];
  barChartOptions: ChartOptions = {
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

          min: 'Jan',
          max: 'Dec',

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
      borderColor: '#F1BD65',
      backgroundColor: '#F1BD65',
    },
    {
      borderColor: '#A69DE4',
      backgroundColor: '#A69DE4',
    },
    {
      borderColor: '#fb99bc',
      backgroundColor: '#fb99bc',
    },
  ];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  constructor() { }

  ngOnInit(): void {
  }

}
