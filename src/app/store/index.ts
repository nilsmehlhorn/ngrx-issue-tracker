import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { hydrationMetaReducer } from './hydration/hydration.reducer';
import { issueReducer } from './issue/issue.reducer';
import { IssueState } from './issue/issue.state';
import { resettingMetaReducer } from './meta-reducers';
import { navigationReducer } from './navigation/navigation.reducer';
import { NavigationState } from './navigation/navigation.state';

export interface RootState {
  issue: IssueState;
  router: RouterReducerState;
  navigation: NavigationState;
}

export const reducers: ActionReducerMap<RootState> = {
  issue: issueReducer,
  router: routerReducer,
  navigation: navigationReducer,
};

export const metaReducers: MetaReducer[] = [
  hydrationMetaReducer,
  resettingMetaReducer,
];
