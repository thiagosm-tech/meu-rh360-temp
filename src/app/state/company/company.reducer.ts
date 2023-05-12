import { createReducer, on, Action, createSelector, createFeatureSelector } from '@ngrx/store';
import * as CompanyActions from './company.actions';
import { Company } from 'src/app/core/models/company.model';

export interface CompanyState extends Company {
  isLoading: boolean;
  error: any;
}

export const initialCompanyState: CompanyState = {
  companyType: '',
  companyName: '',
  companyCNPJ: '',
  cep: '',
  address: '',
  neighborhood: '',
  state: '',
  city: '',
  complement: '',
  cellPhone: '',
  adminName: '',
  cpf: '',
  email: '',
  isLoading: false,
  error: null,
};

const companyReducer = createReducer(
  initialCompanyState,
  on(CompanyActions.saveCompany, (state, { company }) => ({
    ...state,
    ...company,
    isLoading: true,
    error: null,
  })),
  on(CompanyActions.saveCompanySuccess, (state, { company }) => ({
    ...state,
    ...company,
    isLoading: false,
    error: null,
  })),
  on(CompanyActions.saveCompanyFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  }))
);

export function getCompanyReducer(state: CompanyState | undefined, action: Action) {
  return companyReducer(state, action);
}

export const companyState = createFeatureSelector<CompanyState>('company');

export const company = createSelector(
  companyState,
  (state: CompanyState) => state
);
