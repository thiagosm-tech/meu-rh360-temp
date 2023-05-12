import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { User } from 'src/app/core/models/user.model';
import { AppState } from 'src/app/state/app.state';
import * as userActions from 'src/app/state/user/user.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(private store: Store<AppState>) { }

  dispatchCreateUser(user: User) {
    this.store.dispatch(userActions.createUser({ user }));
  }
}
