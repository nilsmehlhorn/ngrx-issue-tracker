import { createAction, props } from '@ngrx/store';
import { Issue } from '../../models/issue';

export const submit = createAction('[Issue] Submit', props<{ issue: Issue }>());

export const submitSuccess = createAction(
  '[Issue] Submit Success',
  props<{ issue: Issue }>()
);

export const submitFailure = createAction('[Issue] Submit Failure');

export const search = createAction('[Issue] Search', props<{ text: string }>());

export const resolve = createAction(
  '[Issue] Resolve',
  props<{ issueId: string }>()
);
