import { Action, ActionReducer } from '@ngrx/store';
import { HydrationActions } from './hydration.actions';

function isHydrationFound(
  action: Action
): action is ReturnType<typeof HydrationActions.found> {
  return action.type === HydrationActions.found.type;
}

export const hydrationMetaReducer = (
  reducer: ActionReducer<unknown>
): ActionReducer<unknown> => {
  return (state, action) => {
    if (isHydrationFound(action)) {
      return action.state;
    } else {
      return reducer(state, action);
    }
  };
};
