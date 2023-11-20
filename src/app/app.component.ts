import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from '@sanga-apps/sidenav';
import { routerList } from './app.routes';
import { SidenavRoute } from '@sanga-apps/models';

@Component({
  standalone: true,
  imports: [RouterModule, SidenavComponent],
  selector: 'sanga-apps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sanga-apps';
  routerList: SidenavRoute[] = routerList;
}
