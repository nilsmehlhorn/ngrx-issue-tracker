import { createSelector } from '@ngrx/store';
import { RootState } from '..';

export const selectFeature = (state: RootState) => state.navigation;

export const selectLoading = createSelector(
  selectFeature,
  ({ loading }) => loading
);
