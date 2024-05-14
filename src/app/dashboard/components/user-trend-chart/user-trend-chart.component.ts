import { Component } from '@angular/core';
import { LineChartComponent } from '../../../shared/line-chart/line-chart.component';
import { MatMenu, MatMenuContent, MatMenuItem, MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-user-trend-chart',
  standalone: true,
  imports: [
    LineChartComponent, 
    MatButtonModule, 
    MatMenuModule, 
    MatMenu, 
    MatNativeDateModule, 
    MatMenuTrigger, 
    MatMenuContent,
    MatMenuItem,
    MatIconModule,
    MatIcon,
  ],
  templateUrl: './user-trend-chart.component.html',
  styleUrl: './user-trend-chart.component.css'
})
export class UserTrendChartComponent {
  chartData: any[] = this.generateRandomData(20, new Date('2023-08-19'), new Date('2023-09-15')); // Generate random data within the specified date range

  title = 'User Trends';
  selectedOption: string = 'daily';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(
      `trending_up`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/trending_up.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `download`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/download.svg")
    );
  }

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
