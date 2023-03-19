import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NavigationState } from './navigation.state';

export const selectFeature = createFeatureSelector<NavigationState>('state');

export const selectLoading = createSelector(
  selectFeature,
  ({ loading }) => loading
);
