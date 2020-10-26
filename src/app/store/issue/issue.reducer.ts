import { createReducer, on } from '@ngrx/store';
import * as IssueActions from './issue.actions';
import { initialState } from './issue.state';
import produce from 'immer';
import { loggingMetaReducer } from '../meta-reducers';

export const reducer = createReducer(
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

export const issueReducer = loggingMetaReducer(reducer);
