import { Component } from '@angular/core';
import { TagModule } from 'primeng/tag'; // ✅ Import this
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ChartModule } from 'primeng/chart';
import { environment } from '../../environments/environment';
import { APP_CONST } from '../app-conts';
import { Subject, takeUntil } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';


@Component({
  selector: 'app-home-page',
  imports: [
    AvatarModule,
    CommonModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    CardModule,
    RatingModule,
    ChartModule,
    FormsModule,
    
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  title = 'UMS_UI';
  doughnutChartOptions:any;
  spinner = false;
  // inventoryChartData: any;
  inventoryChartData: any = {
    labels: ['Available', 'Issued', 'Reserved'],
    datasets: [
      {
        data: [120, 80, 30],
        backgroundColor: ['#5dade2 ', '#3498db', '#5dade2'],  // green, orange, blue
        borderWidth: 2,
        borderColor: '#fff'
      }
    ]
  };
  

  destroy: any = new Subject();

  authors: any[] = [
  // { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png', name: 'Retro Frame' },
  // { src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', name: 'Sunset Hue' },
  // { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png', name: 'Street Lens' }
];


  // products = signal<any[]>([]);
 products = [
  {
    title: '“Between the pages of a book is a lovely place to be.”',
    price: 1299.99,
    inventoryStatus: 'INSTOCK',
    image: 'https://www.shutterstock.com/image-photo/book-open-pages-close-up-600nw-2562942291.jpg'
  },
  {
    title: '“Books are a uniquely portable magic.” – Stephen King',
    price: 799.99,
    inventoryStatus: 'LOWSTOCK',
    image: 'https://thumbs.dreamstime.com/b/flying-magic-books-library-367534733.jpg'
  },
  {
    title: '“A room without books is like a body without a soul.” – Cicero',
    price: 499.99,
    inventoryStatus: 'OUTOFSTOCK',
    image: 'https://cdn.pixabay.com/photo/2016/10/26/10/05/book-1771073_1280.jpg'
  }
];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(
    private http:HttpClient
  ) {
    // this.loadProducts();
    
    this.doughnutChartOptions = {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        title: { display: true, text: 'Inventory Distribution' }
      }
    };
  }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    this.authors = [];
    this.spinner = true;

    this.http.get<any[]>(environment.apiUrl + APP_CONST.API_MAPPINGS.getAuthors).pipe(takeUntil(this.destroy)).subscribe((response: any) => {
      this.spinner = false;
      this.authors = response.data;
      console.log(this.authors)

      this.authors = this.authors.map((item: any) => {
        console.log(environment.imageUrl + item.profilePicUrl);
        item.profilePicUrl = environment.imageUrl + item.profilePicUrl 
        return item
      });
    },(err) => {
      this.spinner = false;
      console.log('error while fetching authors');
      this.authors = [
        { src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', name: 'Nature Pulse' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png', name: 'Urban Glimpse' },
        { src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', name: 'Golden Breeze' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png', name: 'Pixel Frame' },
        { src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', name: 'Cinematic Sky' },
      ]
    });
  }

  // loadProducts() {
  //   this.http.get<any[]>('https://your-api.com/api/products')
  //     .subscribe({
  //       next: (data) => this.products.set(data),
  //       error: (err) => console.error('Error fetching products:', err)
  //     });
  // }

  getSeverity(status: string): string {
    switch (status) {
      case 'INSTOCK': return 'success';
      case 'LOWSTOCK': return 'warning';
      case 'OUTOFSTOCK': return 'danger';
      default: return '';
    }
  }
}