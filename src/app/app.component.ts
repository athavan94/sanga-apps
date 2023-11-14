import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreUiComponent } from '@sanga-apps/core-ui';

@Component({
  standalone: true,
  imports: [RouterModule, CoreUiComponent],
  selector: 'sanga-apps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sanga-apps';
}
