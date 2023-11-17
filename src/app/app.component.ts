import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ToolbarComponent} from "@sanga-apps/shared/ui/toolbar";

@Component({
  standalone: true,
  imports: [RouterModule, ToolbarComponent],
  selector: 'sanga-apps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sanga-apps';
}
