import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssuesComponent } from './components/issues/issues.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NewIssueComponent } from './components/new-issue/new-issue.component';
import { modules } from './modules/modules';
import { DatabaseService } from './services/database.service';
import { metaReducers, reducers } from './store';
import { HydrationEffects } from './store/hydration/hydration.effects';
import { IssueEffects } from './store/issue/issue.effects';
import { RouterEffects } from './store/router/router.effects';

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    NewIssueComponent,
    IssueListComponent,
    IssueDetailComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DatabaseService),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([IssueEffects, HydrationEffects, RouterEffects]),
    StoreRouterConnectingModule.forRoot(),
    modules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
