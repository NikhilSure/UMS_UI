import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-books-genre-line-chart',
  imports: [
    ChartModule
  ],
  templateUrl: './books-genre-line-chart.component.html',
  styleUrl: './books-genre-line-chart.component.css'
})
export class BooksGenreLineChartComponent {
  booksReadData = [
    { date: '2025', genre: 'Fantasy', count: 3 },
    { date: '2025', genre: 'Science Fiction', count: 2 },
    { date: '2025', genre: 'Mystery', count: 1 },
    { date: '2025', genre: 'Romance', count: 4 },
    { date: '2025', genre: 'Thriller', count: 2 },
  
    { date: '2024', genre: 'Fantasy', count: 4 },
    { date: '2024', genre: 'Science Fiction', count: 1 },
    { date: '2024', genre: 'Mystery', count: 3 },
    { date: '2024', genre: 'Romance', count: 5 },
    { date: '2024', genre: 'Thriller', count: 1 },
  
    { date: '2023', genre: 'Fantasy', count: 2 },
    { date: '2023', genre: 'Science Fiction', count: 3 },
    { date: '2023', genre: 'Mystery', count: 5 },
    { date: '2023', genre: 'Romance', count: 2 },
    { date: '2023', genre: 'Thriller', count: 4 },
  
    { date: '2022', genre: 'Fantasy', count: 5 },
    { date: '2022', genre: 'Science Fiction', count: 4 },
    { date: '2022', genre: 'Mystery', count: 2 },
    { date: '2022', genre: 'Romance', count: 6 },
    { date: '2022', genre: 'Thriller', count: 3 },
  
    { date: '2021', genre: 'Fantasy', count: 1 },
    { date: '2021', genre: 'Science Fiction', count: 3 },
    { date: '2021', genre: 'Mystery', count: 4 },
    { date: '2021', genre: 'Romance', count: 2 },
    { date: '2021', genre: 'Thriller', count: 5 },
  ];
  
  chartData:any;
  
  chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Books Read Per Genre Each Day'
      },
      legend: {
        position: 'top'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  constructor() {}

  ngOnInit() {
    const genre = [...new Set(this.booksReadData.map((data:any) => data.genre))]
    const dates = [...new Set(this.booksReadData.map((data:any) => data.date))].sort((a,b) => a-b)

    const datasets = genre.map((genre:any) => {
      const data = dates.map((date:any) => {
        const item:any = this.booksReadData.find((data) => data.genre == genre && data.date == date);
        return item?.count; 
      })
      
      return {
        label : genre,
        data,
        fill:true,
        tension: 0.4
      }
    })

    this.chartData = {
      labels: dates,
      datasets: datasets
    };

    console.log(this.chartData)
  }
}
