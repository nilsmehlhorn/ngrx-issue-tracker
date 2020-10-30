import { Action, createReducer, on } from '@ngrx/store';
import * as IssueActions from './issue.actions';
import { adapter, initialState, IssueState } from './issue.state';

export const reducer = createReducer(
  initialState,
  on(IssueActions.submit, (state) => ({
    ...state,
    loading: true,
  })),
  on(IssueActions.submitSuccess, (state, { issue }) =>
    adapter.addOne(issue, state)
  ),
  on(IssueActions.submitFailure, (state) => ({
    ...state,
    loading: false,
  })),
  on(IssueActions.search, (state, { text }) => ({
    ...state,
    filter: {
      ...state.filter,
      text,
    },
  })),
  on(IssueActions.resolve, (state, { issueId }) =>
    adapter.updateOne(
      {
        id: issueId,
        changes: {
          resolved: true,
        },
      },
      state
    )
  ),
  on(IssueActions.resolveFailure, (state, { issueId }) =>
    adapter.updateOne(
      {
        id: issueId,
        changes: {
          resolved: false,
        },
      },
      state
    )
  ),
  on(IssueActions.loadSuccess, (state, { issues }) => ({
    ...adapter.setAll(issues, state),
    loaded: true,
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
