import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, ValidationErrors } from '@angular/forms';

import { cnpj } from 'cpf-cnpj-validator';

@Directive({
  selector: '[cnpjValidator][ngModel],[cnpjValidator][formControl],[cnpjValidator][formControlName]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CnpjValidatorDirective, multi: true }
  ]
})
export class CnpjValidatorDirective implements Validator {
  validate(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      const validationErrors = cnpjValidator()(control);
      resolve(validationErrors);
    });
  }
}

export function cnpjValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const cnpjFormat = cnpj.format(control.value)
    const isValid = cnpj.isValid(cnpjFormat);
    return isValid ? null : { cnpjValidator: { valid: false } };
  };
}
