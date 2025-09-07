import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SpinnerComponent } from "../../shared/spinner/spinner.component";
import { Avatar } from 'primeng/avatar';
import { ScrollerModule } from 'primeng/scroller';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { APP_CONST } from '../../app-conts';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-add-data',
  imports: [ChartModule,FileUploadModule, CardModule, ReactiveFormsModule, Avatar, ScrollPanelModule, ButtonModule, InputTextModule, SelectModule,CommonModule, ProgressSpinnerModule, SpinnerComponent, InputTextModule, DialogModule,CardModule, TextareaModule],
  templateUrl: './add-data.component.html',
  styleUrl: './add-data.component.css'
})  
export class AddDataComponent {
  form!: FormGroup;
  entityType: "BOOK" | "AUTHOR" = "AUTHOR"
  spinner:boolean = false;
  controls:any = {}

  addPopupVisisble:boolean = false;
  genres = [
    { name: 'Fiction' },
    { name: 'Non-Fiction' },
    { name: 'Fantasy' },
    { name: 'Science' },
    { name: 'Romance' }
  ];

  authors = [
    { name: 'Nature Pulse', src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' },
    { name: 'Urban Glimpse', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' },
    { name: 'Golden Breeze', src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' },
    { name: 'Mystic River', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' },
    { name: 'Sunset Whispers', src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' },
    { name: 'Tech Echo', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' },
    { name: 'Forest Dreams', src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' },
    { name: 'Digital Diary', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' },
    { name: 'Ocean Symphony', src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' },
    { name: 'City Spark', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' },
    { name: 'Cloud Mirage', src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' },
    { name: 'Pixel Notes', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' },
    { name: 'Skyline Soul', src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' },
    { name: 'Streetlight Verse', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' },
    { name: 'Autumn Insight', src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' },
    { name: 'Techno Bloom', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' },
    { name: 'Bliss Horizon', src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' },
    { name: 'Night Lights', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' },
    { name: 'Canvas Bloom', src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' },
    { name: 'Echo Park', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' }
  ];
  
  
  imageUrl:string = "";
  filterItems:any = [];
  destroy: any = new Subject();

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    const currentYear = new Date().getFullYear();
  }

  ngOnInit() {
    this.filterItems = this.authors;
     this.initGraph();
     this.initComp();
  }

  createAuthor() {
    this.controls = {
      fullname: ['', Validators.required],
      bio: [''],
      image: [null]
    }
  }

  createBook() {
    this.controls = {
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: [null, Validators.required],
      publisher: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1000), Validators.max(new Date().getFullYear())]],
      price: ['', [Validators.required, Validators.min(1)]],
      image: [null]
    }
  }

  initComp() {
    switch (this.entityType){
      case "BOOK":
        this.createBook()
        break;
        case "AUTHOR":
        this.getAuthors();
        this.createAuthor();
    }

    this.form = this.fb.group(this.controls);
  }

  getAuthors() {
    this.authors = [];
    this.spinner = true;

    this.http.get<any[]>(environment.apiUrl + APP_CONST.API_MAPPINGS.getAuthors).pipe(takeUntil(this.destroy)).subscribe((response: any) => {
      this.spinner = false;
      this.authors = response.data;
      console.log(this.authors)

      this.authors = this.authors.map((item: any) => {
        item.name = item.fullname;
        item.src = environment.imageUrl + item.profilePicUrl 
        return item;
      });
      this.filterItems = this.authors;
    },(err) => {
      this.spinner = false;
      console.log('error while fetching authors');
    });
  }

  onImageUpload(event: any) {
    console.log(event);
    const file = event.files[0];
    this.form.patchValue({ image: file });
    this.imageUrl = URL.createObjectURL(file);
  }

  ngOnDestroy() {
    if (this.imageUrl) {
      URL.revokeObjectURL(this.imageUrl);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const bookData = this.form.value;
      let formdata = this.buidFormData();
      this.spinner = true;
      
      this.http.post<any[]>(environment.apiUrl + APP_CONST.API_MAPPINGS.getAuthors, formdata).pipe(takeUntil(this.destroy)).subscribe({next: (response) => {
        this.spinner = false;

        if (response) {
          console.log("updated successfully")
          this.addPopupVisisble = false;
        }
      }, error: () => {
        console.log("error while adding")
      }});
    }
  }



  // 

  searchEntity(event:any) {
    let searchPatern  = event.srcElement.value;

    if (!searchPatern) {
      this.filterItems = this.authors; return;
    } 

    this.filterItems = [];
     this.filterItems =  this.authors.filter((item:{name:string})=>  item.name.toLowerCase().includes(searchPatern.toLowerCase()));
  }


  //

  bookChartOptions:any = {};
  bookChartData:any = [] 

  initGraph() {
    const rawData = [
      { date: '2025-06-23', category: 'Fiction', count: 4 },
      { date: '2025-06-23', category: 'Science', count: 2 },
      { date: '2025-06-24', category: 'Fiction', count: 3 },
      { date: '2025-06-24', category: 'History', count: 1 }
      // const rawData = [,
        // 2025-06-23

         
        ,{ date: '2025-06-23', category: 'Fiction', count: 4 },
        { date: '2025-06-23', category: 'Science', count: 2 },
        { date: '2025-06-23', category: 'History', count: 1 },
      
        // 2025-06-24
        { date: '2025-06-24', category: 'Fiction', count: 3 },
        { date: '2025-06-24', category: 'Science', count: 1 },
        { date: '2025-06-24', category: 'Technology', count: 2 },
      
        // 2025-06-25
        { date: '2025-06-25', category: 'Fiction', count: 5 },
        { date: '2025-06-25', category: 'History', count: 2 },
        { date: '2025-06-25', category: 'Philosophy', count: 1 },
      
        // 2025-06-26
        { date: '2025-06-26', category: 'Science', count: 4 },
        { date: '2025-06-26', category: 'Technology', count: 3 },
        { date: '2025-06-26', category: 'Fiction', count: 2 },
        { date: '2025-06-26', category: 'Comics', count: 3 },
      
        // 2025-06-27
        { date: '2025-06-27', category: 'Fiction', count: 1 },
        { date: '2025-06-27', category: 'History', count: 1 },
        { date: '2025-06-27', category: 'Science', count: 2 },
      ];
      
  
    
    const categories = [...new Set(rawData.map(item => item.category))];
    const dates = [...new Set(rawData.map(item => item.date))];
  
    const datasets = categories.map(category => ({
      label: category,
      data: dates.map(date => {
        const entry = rawData.find(r => r.date === date && r.category === category);
        return entry ? entry.count : 0;
      }),
      fill: false,
      borderColor: this.getRandomColor(),
      tension: 0.5
    }));
  
    this.bookChartData = {
      labels: dates,
      datasets: datasets
    };
  
    this.bookChartOptions = {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: {
          display: true,
          text: 'Books Added Per Day by Category'
        }
      }
    };
  }
  
  // Helper to assign random color
  getRandomColor() {
    const colors = ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC', '#FF7043'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  

  openAddPopup() {
    this.addPopupVisisble = true;
  }

  buidFormData() {
    const formData = new FormData();
    formData.append('fullname', this.form.value.fullname);
    formData.append('bio',  this.form.value.bio);
    formData.append('profilePic', this.form.value.image);

    return formData;
  }
}

