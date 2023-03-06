import { createActionGroup } from '@ngrx/store';
import { Issue } from '../../models/issue';
import { randomId } from '../../random-id';

export const IssueActions = createActionGroup({
  source: 'Issues',
  events: {
    Submit: (issue: Issue) => {
      return {
        issue: {
          ...issue,
          id: randomId(),
        },
      };
    },
  },
});
