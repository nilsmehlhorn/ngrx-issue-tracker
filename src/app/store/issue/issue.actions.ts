import { createAction, props } from '@ngrx/store';
import { Issue } from '../../models/issue';
import { randomId } from '../../util';

// export const submit = createAction(
//   '[Issue] Submit',
//   props<{ issue: Issue }>()
// );

export const submit = createAction('[Issue] Submit', (issue: Issue) => {
  return {
    issue: {
      ...issue,
      id: randomId(),
    },
  };
});

export const search = createAction('[Issue] Search', props<{ text: string }>());
