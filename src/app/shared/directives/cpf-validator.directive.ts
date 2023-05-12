import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, ValidationErrors } from '@angular/forms';

import { cpf } from 'cpf-cnpj-validator';

@Directive({
  selector: '[cpfValidator][ngModel],[cpfValidator][formControl],[cpfValidator][formControlName]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CpfValidatorDirective, multi: true }
  ]
})
export class CpfValidatorDirective implements Validator {
  validate(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      const validationErrors = cpfValidator()(control);
      resolve(validationErrors);
    });
  }
}

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const cpfFormat = cpf.format(control.value)
    const isValid = cpf.isValid(cpfFormat);
    return isValid ? null : { cpfValidator: { valid: false } };
  };
}
