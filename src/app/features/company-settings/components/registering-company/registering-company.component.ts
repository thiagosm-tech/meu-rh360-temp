import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, debounceTime, map } from 'rxjs';
import { Company } from 'src/app/core/models/company.model';

import { AddressService } from 'src/app/core/services/addres.service';
import { cnpjValidator } from 'src/app/shared/directives/cnpj-validator.directive';
import { cpfValidator } from 'src/app/shared/directives/cpf-validator.directive';

@Component({
  selector: 'app-registering-company',
  templateUrl: './registering-company.component.html',
  styleUrls: ['./registering-company.component.scss']
})
export class RegisteringCompanyComponent {

  @Output() cancelForm: EventEmitter<void> = new EventEmitter<void>();
  @Output() saveForm: EventEmitter<Company> = new EventEmitter<Company>();

  formCompany!: FormGroup;
  states$: Observable<string[]> = this.addressService.getAllStates();
  cities: string[] = [];

  constructor(private fb: FormBuilder, private addressService: AddressService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getAddresByCep();
  }

  initializeForm(): void {
    this.formCompany = this.fb.group({
      companyType: [''],
      companyName: ['', Validators.required],
      companyCNPJ: ['', [Validators.required, cnpjValidator()]],
      cep: [''],
      address: [''],
      neighborhood: [''],
      state: [''],
      city: [''],
      complement: [''],
      cellPhone: ['', Validators.required],
      adminName: ['', Validators.required],
      cpf: ['', [Validators.required, cpfValidator()]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onCancelClick(): void {
    this.cancelForm.emit();
  }

  onSaveClick(): void {
    if (this.formCompany.valid) {
      const formValue = this.formCompany.getRawValue();
      this.saveForm.emit(formValue);
    } else {
      this.validateAllFormFields(this.formCompany);
    }
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else {
        control?.markAsTouched({ onlySelf: true });
      }
    });
  }

  isInvalidField(field: string): boolean | undefined {
    const formField = this.formCompany.get(field);
    return formField?.invalid && formField?.touched;
  }

  getCitiesByState() {
    const state = this.formCompany.get('state')?.value
    this.addressService.getCitiesByState(state).subscribe(data => {
      this.cities = data;
    })
  }

  getAddresByCep() {
    this.formCompany.get('cep')?.valueChanges.pipe(
      debounceTime(300),
      map((cep: string) => {
        this.addressService.getAddressByCEP(cep).subscribe(async (res: any) => {
          if (res) {
            this.formCompany.get('address')?.patchValue(res.logradouro);
            this.formCompany.get('neighborhood')?.patchValue(res.bairro);
            this.formCompany.get('state')?.patchValue(res.uf);
            this.formCompany.get('complement')?.patchValue(res.complemento);
            this.formCompany.get('city')?.patchValue(res.localidade);
          }
        })
      })
    ).subscribe()
  }
}

