import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  @Output() formValue: EventEmitter<User> = new EventEmitter
  formRegister!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]],
    });
  }

  isInvalidField(field: string): boolean | undefined {
    const formField = this.formRegister.get(field);
    return formField?.invalid && formField?.touched;
  }

  isInvalidPasswordConfirmation(): boolean {
    const password = this.formRegister.get('password');
    const passwordConfirm = this.formRegister.get('passwordConfirm');

    const isInvalid = password?.value !== passwordConfirm?.value && passwordConfirm?.touched;

    return !!isInvalid;
  }

  registerUser() {
    this.formRegister.markAllAsTouched();

    if(!this.formRegister.valid && !this.isInvalidPasswordConfirmation()) {
      return
    }

    this.formValue.emit(this.formRegister.getRawValue());
  }
}
