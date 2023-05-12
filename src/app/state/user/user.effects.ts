import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import * as UserActions from './user.actions';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private router: Router) { }

  createUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.createUser),
      map((action) => {
        const user: User = action.user;
        return UserActions.createUserSuccess({ user })
      }),
      tap(() => {
        this.router.navigate(['configuracoes/empresa'])
      })
    )
  });
}
