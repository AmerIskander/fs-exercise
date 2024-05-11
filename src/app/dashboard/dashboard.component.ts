import { Component } from '@angular/core';
import { SessionPlaylistComponent } from './components/session-playlist/session-playlist.component';
import { UserTrendChartComponent } from './components/user-trend-chart/user-trend-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SessionPlaylistComponent, UserTrendChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
