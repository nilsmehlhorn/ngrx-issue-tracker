import { createActionGroup, props } from '@ngrx/store';
import { Issue } from '../../models/issue';

export const IssueActions = createActionGroup({
  source: 'Issues',
  events: {
    Submit: props<{ issue: Issue }>(),
    'Submit Success': props<{ issue: Issue }>(),
    Search: props<{ text: string }>(),
    Resolve: props<{ issueId: string }>(),
  },
});
