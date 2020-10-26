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
}

export const initialState: IssueState = {
  entities: {},
  filter: {
    text: '',
  },
};
