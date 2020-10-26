import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../../store';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  constructor(private store: Store<RootState>) { }

  ngOnInit(): void {
  }

}
