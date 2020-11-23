import { Action, createReducer, on } from '@ngrx/store';
import produce from 'immer';
import * as IssueActions from './issue.actions';
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
  on(IssueActions.search, (state, { text }) => ({
    ...state,
    filter: {
      ...state.filter,
      text,
    },
  }))
);

export const issueReducer = (state: IssueState, action: Action): IssueState => {
  try {
    return reducer(state, action);
  } catch (error) {
    console.error(error);
    return state;
  }
};
