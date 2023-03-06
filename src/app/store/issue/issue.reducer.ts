import { createReducer, on } from '@ngrx/store';
import { IssueActions } from './issue.actions';
import { initialState, IssueState } from './issue.state';

export const issueReducer = createReducer(
  initialState,
  on(
    IssueActions.submit,
    (state, { issue }): IssueState => ({
      ...state,
      entities: {
        ...state.entities,
        [issue.id]: {
          ...issue,
          resolved: false,
        },
      },
    })
  )
);
