import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Modules
// import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { RatingModule } from 'primeng/rating';
// import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-items-details',
  imports: [BreadcrumbModule, CardModule, CommonModule,
    FormsModule,

    // PrimeNG
    CardModule,
    ImageModule,
    RatingModule,
    ButtonModule,
    TabViewModule, ButtonModule, BadgeModule,],
  templateUrl: './items-details.component.html',
  styleUrl: './items-details.component.css'
})
export class ItemsDetailsComponent {
item:any;
  constructor() {
    // item-details.component.ts
this.item = {
  name: 'Wireless Headphones',
  category: 'Electronics',
  image: 'https://example.com/headphones.jpg',
  price: 2999,
  inStock: true,
  rating: 4.2,
  description: 'High-quality wireless headphones with noise cancellation and 40-hour battery life.',
  specs: [
    { label: 'Brand', value: 'Sony' },
    { label: 'Battery', value: '40 hours' },
    { label: 'Connectivity', value: 'Bluetooth 5.0' }
  ],
  reviews: [
    { user: 'John D.', rating: 5, comment: 'Excellent sound quality and comfort.' },
    { user: 'Aisha K.', rating: 4, comment: 'Battery life is great. A bit tight on the ears.' }
  ]
};

  }
}
