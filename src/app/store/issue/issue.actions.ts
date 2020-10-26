import { createAction, props } from '@ngrx/store';
import { Issue } from '../../models/issue';
import { randomId } from '../../random-id';

// export const submit = createAction(
//   '[Issue] Submit',
//   props<{ issue: Issue }>()
// );

export const submit = createAction(
  '[Issue] Submit',
  (issue: Issue) => {
    return {
      issue: {
        ...issue,
        id: randomId(),
      },
    };
  }
);
