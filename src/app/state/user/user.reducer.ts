import { createReducer, on, Action, createSelector, createFeatureSelector } from '@ngrx/store';

import * as UserActions from './user.actions';
import { User } from 'src/app/core/models/user.model';

export interface UserState extends User {
  isLoading: boolean;
  error: any;
}

export const initialUserState: UserState = {
  name: '',
  email: '',
  password: '',
  isLoading: false,
  error: null,
};

const userReducer = createReducer(
  initialUserState,
  on(UserActions.createUser, (state, { user }) => ({
    ...state,
    name: user.name,
    email: user.email,
    password: user.password,
    isLoading: true,
    error: null,
  })),
  on(UserActions.createUserSuccess, (state, { user }) => ({
    ...state,
    name: user.name,
    email: user.email,
    password: user.password,
    isLoading: false,
    error: null,
  })),
  on(UserActions.createUserFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  }))
);

export function getUserReducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}

export const userState = createFeatureSelector<UserState>('user');

export const user = createSelector(
  userState,
  (state: UserState) => state
);
