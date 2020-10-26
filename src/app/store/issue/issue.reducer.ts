import { createReducer, on } from '@ngrx/store';
import * as IssueActions from './issue.actions';
import { initialState } from './issue.state';

export const issueReducer = createReducer(
  initialState,
  on(IssueActions.submit, (state, { issue }) => ({
    ...state,
    entities: {
      ...state.entities,
      [issue.id]: {
        ...issue,
        resolved: false,
      },
    },
  }))
);
