import { Component, Input, OnInit } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent {
  @Input() chartData: any[] = []; // Input property to receive data from the parent component
  @Input() chartTitle: string = '';
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnInit() {
    this.chartOptions = {
      title: {
        text: this.chartTitle
      },
      xAxis: {
        type: 'datetime'
      },
      series: [{
        name: 'Data',
        data: this.chartData, // Set the chart data
        type: 'line'
      }]
    };
  }
}
