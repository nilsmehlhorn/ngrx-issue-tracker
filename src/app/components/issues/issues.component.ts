import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../../store';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
})
export class IssuesComponent {
  constructor(private store: Store<RootState>) {}
}
