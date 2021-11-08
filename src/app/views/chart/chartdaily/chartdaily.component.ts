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

  barChartData: ChartDataSets[] = [];
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
  item$: Observable<DocumentData[]>;


  constructor(firestore: Firestore) {

    const col = collection(firestore, 'CaseNumbers');
    //  Set collection
    // const datachart = doc(col);
    // setDoc(doc(col, 'datachart'), { data: this.barChartData });
    // Get collection
    const colDaily = collection(firestore, 'CaseNumbers/');
    this.item$ = collectionData(colDaily);
    this.item$.subscribe(x => {
      this.barChartData = x[0].data;
      console.log(x)
    });
  }

  ngOnInit(): void {
  }

}
