import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Issue } from '../../models/issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueListComponent {
  @Input()
  issues: Issue[] = [];

  @Output()
  search = new EventEmitter<string>();

  @Output()
  resolve = new EventEmitter<Issue>();

  onSearch(text: string): void {
    this.search.emit(text);
  }

  onResolve(issue: Issue): void {
    this.resolve.emit(issue);
  }

  trackByIssues(index: number, issue: Issue): string {
    return issue.id;
  }
}
