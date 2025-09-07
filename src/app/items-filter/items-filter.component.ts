import { Component, ViewChild } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { PopoverModule } from 'primeng/popover';

@Component({
  selector: 'app-items-filter',
  imports: [
     FormsModule, 
    SliderModule,
    PopoverModule,
    InputTextModule,
    ButtonModule,
    MultiSelectModule,
    SelectModule
  ],
  templateUrl: './items-filter.component.html',
  styleUrl: './items-filter.component.css'
})
export class ItemsFilterComponent {
filters:any = {
  title: '',
  category: null,
  authors: [],
  price: [0, 1000],
  rating: null
};

@ViewChild('op') op!: any;

toggle(event:any) {
   this.op.toggle(event);
}

categoryOptions = [
  { name: 'All', value: null },
  { name: 'Fiction', value: 'Fiction' },
  { name: 'Self Help', value: 'Self Help' },
  { name: 'Biography', value: 'Biography' },
  { name: 'Science', value: 'Science' },
];

authorOptions = [
  { label: 'George Orwell', value: 'George Orwell' },
  { label: 'James Clear', value: 'James Clear' },
  { label: 'Yuval Noah Harari', value: 'Yuval Noah Harari' },
  { label: 'Stephen Hawking', value: 'Stephen Hawking' },
];

ratings = [1, 2, 3, 4, 5];

applyFilters() {
  // Use this.filters to apply filtering logic to your book list
  console.log('Applying filters:', this.filters);
}

resetFilters() {
  this.filters = {
    title: '',
    category: null,
    authors: [],
    price: [0, 1000],
    rating: null
  };
  this.applyFilters();
}

}
