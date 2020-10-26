import { createReducer, on } from '@ngrx/store';
import * as IssueActions from './issue.actions';
import { initialState } from './issue.state';
import produce from 'immer';

export const issueReducer = createReducer(
  initialState,
  on(IssueActions.submit, (state, { issue }) =>
    produce(state, (draft) => {
      draft.entities[issue.id] = {
        ...issue,
        resolved: false,
      };
    })
  )
);
