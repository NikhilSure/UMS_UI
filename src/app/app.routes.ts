import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemsComponent } from './items/items.component';
import { ItemsDetailsComponent } from './items-details/items-details.component';
import { BookInsightsComponentComponent } from './metrics/book-insights-component/book-insights-component.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'metrics',
    component: BookInsightsComponentComponent,
  },

  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'items',
    component: ItemsComponent,
  },
  {
    path: 'item-details',
    component: ItemsDetailsComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];
