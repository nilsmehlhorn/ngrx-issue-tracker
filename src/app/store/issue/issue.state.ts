import { createEntityAdapter, Dictionary, EntityState } from '@ngrx/entity';
import { Issue } from '../../models/issue';

export type Issues = Dictionary<Issue>

export interface Filter {
  text: string;
}

export interface IssueState extends EntityState<Issue> {
  filter: Filter;
  loaded: boolean;
  loading: boolean;
}

export const adapter = createEntityAdapter<Issue>();

export const initialState: IssueState = adapter.getInitialState({
  filter: {
    text: '',
  },
  loaded: false,
  loading: false,
});
