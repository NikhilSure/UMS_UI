import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksGenreLineChartComponent } from './books-genre-line-chart.component';

describe('BooksGenreLineChartComponent', () => {
  let component: BooksGenreLineChartComponent;
  let fixture: ComponentFixture<BooksGenreLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksGenreLineChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksGenreLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
