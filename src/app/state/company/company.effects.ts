import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as CompanyActions from './company.actions';
import { Router } from '@angular/router';
import { Company } from 'src/app/core/models/company.model';

@Injectable()
export class CompanyEffects {

  constructor(private actions$: Actions, private router: Router) { }

  createCompany$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompanyActions.saveCompany),
      map((action) => {
        const company: Company = action.company;
        return CompanyActions.saveCompanySuccess({ company })
      })
    )
  });
}
