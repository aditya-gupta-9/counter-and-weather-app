import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'counter',
    pathMatch: 'full',
  },
  {
    path: 'counter',
    loadComponent: () => import('./counters/counters.component').then((comp) => comp.CountersComponent),
  },
  {
    path: 'vatavaran',
    loadComponent: () =>
      import('./weather-details/weather-details.component').then((comp) => comp.WeatherDetailsComponent),
  },
  { path: '**', redirectTo: 'counter' },
];
