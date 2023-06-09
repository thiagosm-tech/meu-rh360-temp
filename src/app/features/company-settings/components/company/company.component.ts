import { Component, Input } from '@angular/core';
import { Company } from 'src/app/core/models/company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  @Input() companyData!: Company;
}
