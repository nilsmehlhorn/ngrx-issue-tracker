import { ActionReducer, createReducer, on } from '@ngrx/store';
import { IssueActions } from './issue.actions';
import { adapter, initialState, IssueState } from './issue.state';

export const reducer = createReducer(
  initialState,
  on(
    IssueActions.submit,
    (state): IssueState => ({
      ...state,
      loading: true,
    })
  ),
  on(IssueActions.submitSuccess, (state, { issue }) =>
    adapter.addOne(issue, state)
  ),
  on(
    IssueActions.submitError,
    (state): IssueState => ({
      ...state,
      loading: false,
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
  ),
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
  on(IssueActions.resolveError, (state, { issueId }) =>
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

export const issueReducer: ActionReducer<IssueState> = (state, action) => {
  try {
    return reducer(state, action);
  } catch (error) {
    console.error(error);
    return state ?? initialState;
  }
};
