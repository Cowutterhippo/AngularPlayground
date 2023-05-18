import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { EmailExistsValidator } from './user-exists-validator.service';
import { UserRegistrationService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    email: ['', {
      validators : [Validators.required, Validators.email],
      asyncValidators: [ this.emailExistsValidator.validate.bind(this.emailExistsValidator)],
      updateOn: 'blur'
    }],
    password: ['', [Validators.required, PasswordStrengthValidator]],
    confirmPassword: ['', [Validators.required, confirmPasswordValidator]],
    username:  ['', {
      validators : [Validators.required, Validators.minLength(3)],
      asyncValidators: [ this.emailExistsValidator.validate.bind(this.emailExistsValidator)],
      updateOn: 'blur'
    }],
   });
  constructor(
    private emailExistsValidator: EmailExistsValidator,
    private fb:FormBuilder,
    private registerService: UserRegistrationService
  ) { }

  ngOnInit() {}

  public onSubmit() {
    if(this.registerForm.valid) {
      console.log('RegisterComponent.onSubmit()');
      console.log(this.registerForm.value);
      this.registerService.register(this.registerForm.value).subscribe((res: any) => {
        console.log('response in submit',res);
      });
    }
  }
}


/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

  if ( !control.parent || !control )
  {
      return null;
  }

  const password = control.parent.get('password');
  const confirmPassword = control.parent.get('confirmPassword');

  if ( !password || !confirmPassword )
  {
      return null;
  }

  if ( confirmPassword.value === '' )
  {
      return null;
  }

  if ( password.value === confirmPassword.value )
  {
      return null;
  }

  return {passwordsNotMatching: true};
};

export const PasswordStrengthValidator: ValidatorFn = (control: AbstractControl): any => {
  const formValue = control.value;
  console.log(formValue);
  function containsUppercase(pw: string) {
    return /[A-Z]/.test(pw) ? null : {passwordNotStrong: true, passwordNoUppercase: true};
  }

  function containsLowercase(pw: string) {
    return /[a-z]/.test(pw) ? null : {passwordNotStrong: true, passwordNoLowercase: true};
  }

  function containsNumber(pw: string) {
    return /[0-9]/.test(pw) ? null : {passwordNotStrong: true, passwordNoNumber: true};
  }

  function containsSpecialCharacter(pw: string) {
    return /[^a-zA-Z0-9]/.test(pw) ? null : {passwordNotStrong: true, passwordNoSpecialCharacter: true};
  }

  function minLength(pw: string) {
    return pw.length > 8 ? null : {passwordNotStrong: true, passwordTooShort: true};
  }
  const result = {...containsUppercase(formValue), ...containsLowercase(formValue), ...containsNumber(formValue), ...containsSpecialCharacter(formValue), ...minLength(formValue)};
  return result;
}
