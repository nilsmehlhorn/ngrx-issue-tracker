import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const modules = [
  StoreDevtoolsModule.instrument({
    maxAge: 25,
  }),
];
