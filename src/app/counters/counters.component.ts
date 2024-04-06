import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CountersService } from '../services/counters.service';

@Component({
  selector: 'app-counters',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './counters.component.html',
  styleUrl: './counters.component.scss',
})
export class CountersComponent {
  constructor(public countersService: CountersService) {}
}
