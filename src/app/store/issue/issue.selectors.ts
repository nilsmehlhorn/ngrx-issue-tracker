import { RootState } from '..';

export const selectAll = (state: RootState) =>
  Object.values(state.issue.entities);
