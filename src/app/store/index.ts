import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { hydrationMetaReducer } from './hydration/hydration.reducer';
import { resettingMetaReducer } from './meta-reducers';
import { navigationReducer } from './navigation/navigation.reducer';
import { NavigationState } from './navigation/navigation.state';

export interface RootState {
  router: RouterReducerState;
  navigation: NavigationState;
}

export const reducers: ActionReducerMap<RootState> = {
  router: routerReducer,
  navigation: navigationReducer,
};

export const metaReducers: MetaReducer[] = [
  hydrationMetaReducer,
  resettingMetaReducer,
];
