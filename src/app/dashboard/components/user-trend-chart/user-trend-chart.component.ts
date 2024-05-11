import { Component } from '@angular/core';
import { LineChartComponent } from '../../../shared/line-chart/line-chart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-trend-chart',
  standalone: true,
  imports: [LineChartComponent, CommonModule],
  templateUrl: './user-trend-chart.component.html',
  styleUrl: './user-trend-chart.component.css'
})
export class UserTrendChartComponent {
  chartData: any[] = this.generateRandomData(20, new Date('2023-08-19'), new Date('2023-09-15')); // Generate random data within the specified date range

  title = 'User Trends';

  generateRandomData(count: number, startDate: Date, endDate: Date): any[] {
    const data: any[] = [];
    const startTime: number = startDate.getTime();
    const endTime: number = endDate.getTime();

    const timeInterval = (endTime - startTime) / count;

    for (let i = 0; i < count; i++) {
      const timestamp = startTime + i * timeInterval; // Generate timestamp for each data point
      const value = Math.random() * 100; // Generate random value
      data.push([timestamp, value]);
    }

    return data;
  }
}
