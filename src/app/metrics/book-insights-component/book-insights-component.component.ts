import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-book-insights-component',
  imports: [
    TableModule,
    CardModule,
    ChartModule,
    DatePipe,
    CommonModule
],
  templateUrl: './book-insights-component.component.html',
  styleUrl: './book-insights-component.component.css'
})
export class BookInsightsComponentComponent {
  genreChartData: any;
  loginChartData: any;
  inventoryChartData: any;

  barChartOptions: any;
  lineChartOptions: any;
  doughnutChartOptions: any;

  readingData = [
    {
      date: new Date(),
      books: ['Clean Code', 'Atomic Habits']
    },
    {
      date: new Date(new Date().setDate(new Date().getDate() - 1)),
      books: ['Deep Work']
    },
    {
      date: new Date(new Date().setDate(new Date().getDate() - 2)),
      books: ['The Pragmatic Programmer', 'Hooked']
    }
  ];
  

  ngOnInit() {
    this.genreChartData = {
      labels: ['Fiction', 'Sci-Fi', 'Romance', 'History', 'Self-Help'],
      datasets: [
        {
          label: 'Books Read',
          
          backgroundColor: ['#42A5F5', '#7E57C2', '#26A69A', '#FFA726', '#AB47BC'],
          data: [12, 9, 15, 5, 7]
        }
      ]
    };

    this.loginChartData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Login Sessions',
          data: [5, 7, 3, 8, 6, 9, 4],
          fill: false,
          borderColor: '#66BB6A',
          tension: 0.4
        }
      ]
    };

    this.inventoryChartData = {
      labels: ['Available', 'Issued', 'Reserved'],
      datasets: [
        {
          data: [120, 80, 30],
          backgroundColor: ['#FFA726', '#EF5350', '#AB47BC'],
          hoverBackgroundColor: ['#FFB74D', '#E57373', '#BA68C8']
        }
      ]
    };

    this.barChartOptions = {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Books by Genre' }
      }
    };

    this.lineChartOptions = {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: { display: true, text: 'Weekly Login Activity' }
      }
    };

    this.doughnutChartOptions = {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        title: { display: true, text: 'Inventory Distribution' }
      }
    };
  }

}
