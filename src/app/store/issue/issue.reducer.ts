import { ActionReducer, createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import { IssueActions } from './issue.actions';
import { initialState, IssueState } from './issue.state';

export const reducer = createReducer(
  initialState,
  on(IssueActions.submit, (state, { issue }) =>
    produce(state, (draft) => {
      draft.entities[issue.id] = {
        ...issue,
        resolved: false,
      };
    })
  ),
  on(
    IssueActions.search,
    (state, { text }): IssueState => ({
      ...state,
      filter: {
        ...state.filter,
        text,
      },
    })
  )
);

export const issueReducer: ActionReducer<IssueState> = (state, action) => {
  try {
    return reducer(state, action);
  } catch (error) {
    console.error(error);
    return state ?? initialState;
  }
};
