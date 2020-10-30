import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
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
import {
  defaultDataServiceConfig,
  entityConfig
} from './store/entity-metadata';
import { HydrationEffects } from './store/hydration/hydration.effects';
import { RouterEffects } from './store/router/router.effects';

/*
 The RouterState enum is a const enum that's erased at compile time. This doesn't play well with StackBlitz.
 Therefore, I'm implicitly referencing the second value from this enum manually (1=Minimal, starting at 0).
 You should import the actual enum in your app.
 see: https://github.com/ngrx/platform/blob/10.0.1/modules/router-store/src/router_store_module.ts#L42-L50
 see: https://ncjamieson.com/dont-export-const-enums/
*/
const RouterStateMinimal = 1;

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
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([HydrationEffects, RouterEffects]),
    StoreRouterConnectingModule.forRoot({ routerState: RouterStateMinimal }),
    EntityDataModule.forRoot(entityConfig),
    modules,
    InMemoryWebApiModule.forRoot(DatabaseService),
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
