import { ActionReducer, createReducer, on } from '@ngrx/store';
import { IssueActions } from './issue.actions';
import { initialState, IssueState } from './issue.state';

export const reducer = createReducer(
  initialState,
  on(
    IssueActions.submit,
    (state): IssueState => ({
      ...state,
      loading: true,
    })
  ),
  on(IssueActions.submitSuccess, (state, { issue }): IssueState => {
    return {
      ...state,
      entities: {
        ...state.entities,
        [issue.id]: issue,
      },
      loading: false,
    };
  }),
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
  on(IssueActions.resolve, (state, { issueId }): IssueState => {
    const issue = state.entities[issueId];
    return {
      ...state,
      entities: {
        ...state.entities,
        [issueId]: {
          ...issue,
          resolved: true,
        },
      },
    };
  }),
  on(IssueActions.resolveError, (state, { issueId }): IssueState => {
    const issue = state.entities[issueId];
    return {
      ...state,
      entities: {
        ...state.entities,
        [issueId]: {
          ...issue,
          resolved: false,
        },
      },
    };
  })
);

export const issueReducer: ActionReducer<IssueState> = (state, action) => {
  try {
    return reducer(state, action);
  } catch (error) {
    console.error(error);
    return state ?? initialState;
  }
};
