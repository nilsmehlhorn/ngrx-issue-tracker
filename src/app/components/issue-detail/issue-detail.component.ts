import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue } from '../../models/issue';
import { IssueCollectionService } from '../../services/issue-collection.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueDetailComponent {
  issue$: Observable<Issue | undefined>;

  constructor(private issues: IssueCollectionService) {
    this.issue$ = this.issues.active$;
  }
}
