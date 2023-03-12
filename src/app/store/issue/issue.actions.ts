import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Issue } from '../../models/issue';

export const IssueActions = createActionGroup({
  source: 'Issues',
  events: {
    Submit: props<{ issue: Issue }>(),
    'Submit Success': props<{ issue: Issue }>(),
    'Submit Error': emptyProps(),
    Search: props<{ text: string }>(),
    Resolve: props<{ issueId: string }>(),
    'Resolve Success': emptyProps(),
    'Resolve Error': props<{ issueId: string }>(),
    Load: emptyProps(),
    'Load Success': props<{ issues: Issue[] }>(),
  },
});
