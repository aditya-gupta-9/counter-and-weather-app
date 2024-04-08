import { createAction, props } from '@ngrx/store';
import { ICityWeather } from './weather.model';

export const loadCityWeatherData = createAction('[Weather Page] Load Data', props<{ cityName: string }>());
export const loadCityWeatherDataSuccess = createAction(
  '[Weather API] Load Data Success',
  props<{ data: ICityWeather; cityName: string }>()
);
export const loadCityWeatherDataFailure = createAction(
  '[Weather API] Load Data Failure',
  props<{ error: string }>()
);
