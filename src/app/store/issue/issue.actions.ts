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

export const resolveSuccess = createAction('[Issue] Resolve Success');

export const resolveFailure = createAction(
  '[Issue] Resolve Failure',
  props<{ issueId: string }>()
);

export const load = createAction('[Issue] Load');

export const loadSuccess = createAction(
  '[Issue] Load Success',
  props<{ issues: Issue[] }>()
);
