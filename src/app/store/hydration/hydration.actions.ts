import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { RootState } from '..';

export const HydrationActions = createActionGroup({
  source: 'Hydration',
  events: {
    Start: emptyProps(),
    Found: props<{ state: RootState }>(),
    NotFound: emptyProps(),
  },
});
