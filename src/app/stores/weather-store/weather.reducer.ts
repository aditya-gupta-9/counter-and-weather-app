import { createReducer, on } from '@ngrx/store';
import { ICityWeather } from './weather.model';
import {
  loadCityWeatherData,
  loadCityWeatherDataFailure,
  loadCityWeatherDataSuccess,
} from './weather.action';

export interface IWeatherState {
  data: ICityWeather | null;
  cities: string[];
  loading: boolean;
  error: string;
}

export const initialState: IWeatherState = {
  data: null,
  cities: [],
  loading: false,
  error: '',
};

export const weatherReducer = createReducer(
  initialState,
  on(loadCityWeatherData, (state) => ({ ...state, loading: true })),
  on(loadCityWeatherDataSuccess, (state, { data, cityName }) => ({
    ...state,
    cities: [
      cityName + ' - ' + data.weather?.[0]?.description,
      ...state.cities.filter((city) => !city.toLowerCase().includes(cityName.toLowerCase())),
    ],
    data,
    loading: false,
  })),
  on(loadCityWeatherDataFailure, (state, { error }) => ({ ...state, data: null, loading: false, error }))
);
