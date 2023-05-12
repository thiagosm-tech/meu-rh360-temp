import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authenticate',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./features/company-settings/company-settings.module').then(m => m.CompanySettingsModule)
  },
  {
    path: '**', redirectTo: 'authenticate'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
