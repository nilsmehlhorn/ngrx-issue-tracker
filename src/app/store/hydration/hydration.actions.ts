import { createAction, props } from '@ngrx/store';
import { RootState } from '..';

export const hydrate = createAction('[Hydration] Hydrate');

export const hydrateSuccess = createAction(
  '[Hydration] Hydrate Success',
  props<{ state: RootState }>()
);

export const hydrateFailure = createAction('[Hydration] Hydrate Failure');
