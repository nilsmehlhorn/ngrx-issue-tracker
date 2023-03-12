import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssuesComponent } from './components/issues/issues.component';
import { NewIssueComponent } from './components/new-issue/new-issue.component';
import { modules } from './modules/modules';
import { metaReducers, reducers } from './store';

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    NewIssueComponent,
    IssueListComponent,
    IssueDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    modules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
