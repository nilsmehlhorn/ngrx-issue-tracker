import * as IssueActions from './issue.actions';

describe('Issue Actions', () => {
  describe('resolve', () => {
    it('should return resolve action', () => {
      const issueId = 'issue-1';
      const action = IssueActions.resolve({ issueId });
      expect(action.issueId).toBe(issueId);
    });
  });
});
