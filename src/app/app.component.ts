import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from "@angular/material/toolbar";
import {SidenavComponent} from "@sanga-apps/sidenav";

@Component({
  standalone: true,
  imports: [RouterModule, MatToolbarModule, SidenavComponent],
  selector: 'sanga-apps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sanga-apps';
}
