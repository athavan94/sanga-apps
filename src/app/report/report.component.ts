import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";

@Component({
  selector: 'sanga-apps-report',
  standalone: true,
    imports: [CommonModule, MatButtonModule, MatSidenavModule],
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent {}
