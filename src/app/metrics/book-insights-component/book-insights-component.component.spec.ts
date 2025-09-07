import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInsightsComponentComponent } from './book-insights-component.component';

describe('BookInsightsComponentComponent', () => {
  let component: BookInsightsComponentComponent;
  let fixture: ComponentFixture<BookInsightsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookInsightsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookInsightsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
