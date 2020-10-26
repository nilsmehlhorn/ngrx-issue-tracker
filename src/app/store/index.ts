import { ActionReducerMap } from '@ngrx/store';
import { issueReducer } from './issue/issue.reducer';
import { IssueState } from './issue/issue.state';

export interface RootState {
  issue: IssueState;
}

export const reducers: ActionReducerMap<RootState> = {
  issue: issueReducer,
};
