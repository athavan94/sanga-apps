import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'sanga-apps-rapport',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss'],
})
export class RapportComponent {}
