import { EntitySelectorsFactory } from '@ngrx/data';
import { createSelector } from '@ngrx/store';
import { Issue } from '../../models/issue';
import * as fromRouter from '../router/router.selectors';

export const {
  selectEntities,
  selectEntityMap,
} = new EntitySelectorsFactory().create<Issue>('Issue');

export interface IssueStats {
  total: number;
  resolved: number;
}

export const selectStats = createSelector(
  selectEntities,
  (issues): IssueStats => {
    const resolved = issues.filter((issue) => issue.resolved);
    return {
      total: issues.length,
      resolved: resolved.length,
    };
  }
);

export const selectActiveId = fromRouter.selectRouteParam('id');

export const selectActive = createSelector(
  selectEntityMap,
  selectActiveId,
  (entities, id) => entities[id]
);
