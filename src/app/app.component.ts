import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  standalone: true,
  imports: [RouterModule, MatToolbarModule],
  selector: 'sanga-apps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sanga-apps';
}
