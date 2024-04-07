import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { countersReducer } from './counters.reducer';

export interface State {
  counters: number[];
}

export const reducers: ActionReducerMap<State> = {
  counters: countersReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
