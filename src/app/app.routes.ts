import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemsComponent } from './items/items.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomePageComponent
    }
    ,
    {
        path: 'items',
        component: ItemsComponent
    }
        ]
