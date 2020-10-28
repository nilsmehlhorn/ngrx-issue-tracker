import { INIT } from '@ngrx/store';
import * as IssueActions from './issue.actions';
import { issueReducer } from './issue.reducer';
import { initialState, IssueState } from './issue.state';

describe('Issue Reducer', () => {
  describe('init action', () => {
    it('should return the initial state', () => {
      const nextState = issueReducer(undefined, { type: INIT });
      expect(nextState).toBe(initialState);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const nextState = issueReducer(initialState, {} as any);
      expect(nextState).toBe(initialState);
    });
  });

  describe('resolve', () => {
    it('should resolve issue', () => {
      const issueId = 'issue-1';
      const state: IssueState = {
        ...initialState,
        loaded: true,
        entities: {
          [issueId]: {
            id: issueId,
            title: 'Test Issue',
            description: 'This is a test description',
            priority: 'low',
            resolved: false,
          },
        },
      };
      const nextState = issueReducer(state, IssueActions.resolve({ issueId }));
      expect(nextState.entities[issueId].resolved).toBeTruthy();
    });
  });
});
