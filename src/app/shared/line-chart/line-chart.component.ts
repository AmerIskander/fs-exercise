import { Component, Input, OnInit } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [HighchartsChartModule, CommonModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent {
  @Input() chartData: any[] = []; // Input property to receive data from the parent component
  @Input() chartTitle: string = '';
  Highcharts: typeof Highcharts = Highcharts;
  isHighcharts = typeof Highcharts === 'object';
  chartConstructor: string = 'chart';
  chartOptions: Highcharts.Options = {};
  
  
  ngOnInit() {
    this.chartOptions = {
      title: {
        text: undefined
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#F5F5F5',
        borderRadius: 3,
        positioner: function(labelWidth, labelHeight, point) {
          var tooltipX = point.plotX - 50;
          var tooltipY = 0;
          return {
              x: tooltipX,
              y: tooltipY
          };
        },
        shape: 'rect',
      },
      xAxis: {
        type: 'datetime',
        gridLineWidth: 1,
        lineWidth: 0,
        tickLength: 0,
        title: {
          text: undefined
        },
        crosshair: {
          color: 'lightgray',
          dashStyle: 'Solid'
        },
      },
      plotOptions: {
        series: {
          pointStart: Date.UTC(2023, 18, 9),
          pointIntervalUnit: 'day',
          states: {
            hover: {
              enabled: true,
              halo: null
            }
          },
          marker: {
            radius: 3,
            fillColor: 'black',
            enabled: false
          },
          point: {
            events: {
                mouseOver: function () {}
            }
          }
        }
      },
      yAxis: {
        gridLineWidth: 1,
        type: 'linear',
        tickAmount:5,
        min: 5,
        title: {
          text: undefined
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Data',
        data: this.chartData, // Set the chart data
        type: 'line'
      }]
    };
  }
}
