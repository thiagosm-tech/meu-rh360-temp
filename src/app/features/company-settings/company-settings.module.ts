import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanySettingsComponent } from './company-settings.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { SideMenuModule } from 'src/app/shared/components/side-menu/side-menu.module';
import { CompanySettingsRoutingModule } from './company-settings-routing.module';
import { RegisteringCompanyComponent } from './components/registering-company/registering-company.component';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    CompanyComponent,
    CompanySettingsComponent,
    BreadCrumbComponent,
    RegisteringCompanyComponent
  ],
  imports: [
    CommonModule,
    CompanySettingsRoutingModule,
    SideMenuModule,
    HeaderModule,
    ModalModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forChild()
  ]
})
export class CompanySettingsModule { }
