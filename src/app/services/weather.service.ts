import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICityWeather } from '../stores/weather-store/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getCityWeatherData(cityName: string): Observable<ICityWeather> {
    return this.httpClient.get<ICityWeather>('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: cityName,
        appid: 'd4594364698122bfd1c4b3eb5f2ff19f',
      },
    });
  }
}
