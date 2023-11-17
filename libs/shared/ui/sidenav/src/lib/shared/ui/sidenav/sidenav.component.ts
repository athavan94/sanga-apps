import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from "@angular/material/sidenav";

@Component({
  selector: 'sanga-shared-ui-sidenav',
  standalone: true,
  imports: [CommonModule, MatSidenavModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {}
