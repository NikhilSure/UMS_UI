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
    FormsModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  title = 'UMS_UI';

  imageItems = [
  { src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', name: 'Nature Pulse' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png', name: 'Urban Glimpse' },
  { src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', name: 'Golden Breeze' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png', name: 'Pixel Frame' },
  { src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', name: 'Cinematic Sky' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png', name: 'Retro Frame' },
  { src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', name: 'Sunset Hue' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png', name: 'Street Lens' }
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