import { INIT } from '@ngrx/store';
import { reducers, RootState } from '.';

export const mockState = (override: Partial<RootState> = {}): RootState => {
  const initialState: Partial<RootState> = {};
  Object.entries(reducers).forEach(([key, reducer]) => {
    initialState[key as keyof RootState] = reducer(undefined, { type: INIT });
  });
  return {
    ...initialState,
    ...override,
  } as RootState;
};
