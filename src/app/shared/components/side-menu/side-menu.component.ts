import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  public isCollapsed: boolean = false;
  public isCollapsedCompany: boolean = false;
  @Input() isHaveCompany: boolean = false;


  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleCollapseCompany() {
    this.isCollapsedCompany = !this.isCollapsedCompany;
  }
}
