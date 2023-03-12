import { Issue } from '../../models/issue';

export interface Issues {
  [id: string]: Issue;
}

export interface Filter {
  text: string;
}

export interface IssueState {
  entities: Issues;
  filter: Filter;
  loaded: boolean;
}

export const initialState: IssueState = {
  entities: {},
  filter: {
    text: '',
  },
  loaded: false,
};
