import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getCityWeatherData() {
    return this.httpClient.get('https://api.openweathermap.org/data/3.0/onecall', {
      params: {
        lat: '33.44',
        lon: '-94.04',
        appid: 'd4594364698122bfd1c4b3eb5f2ff19f',
      },
    });
  }
}
