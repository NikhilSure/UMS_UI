import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddDataComponent } from './add-data/add-data.component';

export const routes: Routes = [
    {
        path: '',
        component: AdminComponent
    },
    {
        path: 'add',
        component: AddDataComponent
    }
]
