import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/state/app.state';
import { UserState, user } from 'src/app/state/user/user.reducer';
import * as companyActions from 'src/app/state/company/company.actions'
import { Company } from 'src/app/core/models/company.model';

@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.scss']
})
export class CompanySettingsComponent {

  @Input() modalOpen = false;
  user$: Observable<UserState> = this.store.select(user);
  name: string = '';
  companyData!: Company;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.user$.subscribe((data: UserState) => {
      this.name = data.name;
    })
  }

  startConfig() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  getFormData(company: Company) {
    this.companyData = company;
    this.store.dispatch(companyActions.saveCompany({ company }));
    this.closeModal()
  }
}
