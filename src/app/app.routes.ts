import { Route } from '@angular/router';
import { SidenavRoute } from '@sanga-apps/models';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'rapport',
    loadChildren: () =>
      import('./rapport/rapport.routes').then((r) => r.rapportRoutes),
  },
  {
    path: 'logbook',
    loadChildren: () =>
      import('./logbook/logbook.routes').then((l) => l.logbookRoutes),
  },
];

export const routerList: SidenavRoute[] = [
  {
    name: 'Home',
    link: 'home',
    icon: 'home'
  },
  {
    name: 'Rapport',
    link: 'rapport',
    icon: 'speaker_motes',
  },
  {
    name: 'Logbook',
    link: 'logbook',
    icon: 'schedule'
  }
];
