import { INIT } from '@ngrx/store';
import { IssueActions } from './issue.actions';
import { IssueFactory } from './issue.factory.spec';
import { issueReducer } from './issue.reducer';
import { initialState } from './issue.state';

describe('Issue Reducer', () => {
  let factory: IssueFactory;

  beforeEach(() => {
    factory = new IssueFactory();
  });

  describe('init action', () => {
    it('should return the initial state', () => {
      const nextState = issueReducer(undefined, { type: INIT });
      expect(nextState).toBe(initialState);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const nextState = issueReducer(initialState, { type: 'unknown' });
      expect(nextState).toBe(initialState);
    });
  });

  describe('resolve', () => {
    it('should resolve issue', () => {
      const issue = factory.entity();
      const state = factory.state({
        loaded: true,
        entities: factory.entities(issue),
      });
      const nextState = issueReducer(
        state,
        IssueActions.resolve({ issueId: issue.id })
      );
      expect(nextState.entities[issue.id].resolved).toBeTruthy();
    });
  });
});
