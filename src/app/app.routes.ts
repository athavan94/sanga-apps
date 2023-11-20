import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { SidenavRoute } from '@sanga-apps/models';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  {
    path: 'rapport',
    loadChildren: () =>
      import('./rapport/rapport.routes').then((r) => r.rapportRoutes),
  },
];

export const routerList: SidenavRoute[] = [
  {
    name: 'Rapport',
    link: 'rapport',
    icon: 'email',
  },
];
