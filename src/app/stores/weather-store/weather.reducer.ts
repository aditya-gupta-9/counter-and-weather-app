import { createReducer, on } from '@ngrx/store';
import { ICityWeather } from './weather.model';
import {
  clearAllCities,
  deleteCity,
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
  on(loadCityWeatherData, (state) => ({ ...state, loading: true, error: '' })),
  on(loadCityWeatherDataSuccess, (state, { data, cityName }) => ({
    ...state,
    cities: [cityName, ...state.cities.filter((city) => city.toLowerCase() !== cityName.toLowerCase())],
    data,
    loading: false,
  })),
  on(loadCityWeatherDataFailure, (state, { error }) => ({ ...state, data: null, loading: false, error })),
  on(deleteCity, (state, { cityName }) => ({
    ...state,
    cities: state.cities.filter((city) => city != cityName),
  })),
  on(clearAllCities, (state) => ({ ...state, cities: [] }))
);
