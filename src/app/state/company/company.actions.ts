import { createAction, props } from '@ngrx/store';
import { Company } from 'src/app/core/models/company.model';

enum Actions {
    saveCompany = '[Company] Save Company',
    saveCompanySuccess = '[Company] Save Company Success',
    saveCompanyFailure = '[Company] Save Company Failure',
}

export const saveCompany = createAction(Actions.saveCompany, props<{ company: Company }>());
export const saveCompanySuccess = createAction(Actions.saveCompanySuccess, props<{ company: Company }>());
export const saveCompanyFailure = createAction(Actions.saveCompanyFailure, props<{ error: any }>());
