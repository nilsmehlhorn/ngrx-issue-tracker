import { Issue } from '../../models/issue';
import { initialState, Issues, IssueState } from './issue.state';

export class IssueFactory {
  private lastId = 0;

  entity(issue?: Partial<Issue>): Issue {
    const id = this.lastId++;
    return {
      id: `issue-${id}`,
      title: `Title ${id}`,
      description: `Description ${id}`,
      priority: `medium`,
      resolved: false,
      ...issue,
    };
  }

  entities(...issues: Issue[]): Issues {
    const entities: Issues = {};
    issues.forEach((issue) => (entities[issue.id] = issue));
    return entities;
  }

  state(state: Partial<IssueState>): IssueState {
    return {
      ...initialState,
      ...state,
    };
  }
}
