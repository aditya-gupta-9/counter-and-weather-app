import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CountersService } from './services/counters.service';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  counters$?: Observable<number[]> = this._store.select('counters');
  constructor(private _store: Store<State>) {}
}
