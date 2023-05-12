import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideMenuComponent } from './side-menu.component';



@NgModule({
  declarations: [
    SideMenuComponent
  ],
  exports: [
    SideMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SideMenuModule { }
