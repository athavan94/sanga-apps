import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ReportComponent} from "./report/report.component";

@Component({
  standalone: true,
  imports: [RouterModule, ReportComponent],
  selector: 'sanga-apps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sanga-apps';
}
