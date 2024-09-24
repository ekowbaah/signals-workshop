import { HomeComponent } from './home/home.component';
import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'signal',
    loadChildren: () => import('./signal/signal-routings'),
  },
  {
    path: 'table',
    loadComponent: () => import('./table/table.component'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
