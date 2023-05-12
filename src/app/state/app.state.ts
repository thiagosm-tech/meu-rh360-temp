import { ActionReducerMap } from '@ngrx/store';

import { UserState, getUserReducer } from './user/user.reducer';
import { UserEffects } from './user/user.effects';
import { CompanyState, getCompanyReducer } from './company/company.reducer';

export interface AppState {
  user: UserState;
  company: CompanyState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: getUserReducer,
  company: getCompanyReducer,

};

export const effects = [
    UserEffects
]
