import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTrendChartComponent } from './user-trend-chart.component';

describe('UserTrendChartComponent', () => {
  let component: UserTrendChartComponent;
  let fixture: ComponentFixture<UserTrendChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTrendChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserTrendChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
