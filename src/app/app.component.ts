import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { reset } from './store/meta-reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store) {}

  reset(): void {
    this.store.dispatch(reset());
  }
}
