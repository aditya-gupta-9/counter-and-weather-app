import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.scss',
})
export class WeatherDetailsComponent implements OnInit {
  constructor(private _weatherService: WeatherService) {}
  cityNameControl: FormControl = new FormControl(null, Validators.required);

  ngOnInit(): void {
    this._weatherService.getCityWeatherData().pipe(first()).subscribe(console.log);
  }
}
