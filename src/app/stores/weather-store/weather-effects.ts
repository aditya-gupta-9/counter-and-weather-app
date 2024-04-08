import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WeatherService } from '../../services/weather.service';
import {
  loadCityWeatherData,
  loadCityWeatherDataFailure,
  loadCityWeatherDataSuccess,
} from './weather.action';
import { catchError, map, mergeMap, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class WeatherEffects {
  loadWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCityWeatherData),
      mergeMap((action) => {
        const cityName = action.cityName;
        return this.weatherService.getCityWeatherData(cityName).pipe(
          map((data) => loadCityWeatherDataSuccess({ data, cityName })),
          catchError((error: HttpErrorResponse) =>
            of(loadCityWeatherDataFailure({ error: error?.error?.message || 'Something went wrong!' }))
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private weatherService: WeatherService) {}
}
