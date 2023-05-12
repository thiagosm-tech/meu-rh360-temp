import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';

enum Actions {
    createUser = '[User] Create User',
    createUserSuccess = '[User] Create User Success',
    createUserFailure = '[User] Create User Patient Failure',
}

export const createUser = createAction(Actions.createUser, props<{ user: User }>());
export const createUserSuccess = createAction(Actions.createUserSuccess, props<{ user: User }>());
export const createUserFailure = createAction(Actions.createUserFailure, props<{ error: any }>());
