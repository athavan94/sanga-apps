import { Route } from '@angular/router';
import {AppComponent} from "./app.component";

export const appRoutes: Route[] = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: AppComponent},
    {path: 'rapport', loadChildren: () => import('./rapport/rapport.routes').then((r) => r.rapportRoutes)},
];

export const routerList = [
    {
        name: 'Rapport',
        link: 'rapport',
        icon: 'email'
    }
]