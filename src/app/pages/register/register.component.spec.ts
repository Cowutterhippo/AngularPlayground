import { RegisterComponent, confirmPasswordValidator, PasswordStrengthValidator } from './register.component';
import { EmailExistsValidator } from './user-exists-validator.service';
import { UserRegistrationService } from './register.service';
import { of } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { fakeAsync, tick, async } from '@angular/core/testing';

// in my opinion, front end unit tests are dumb. I don't like them.  I don't like writing them.  I don't like reading them.  I don't like maintaining them.
// this is a waste of time honestly. Projects should just write tests for complext methods to make sure they work as expected.
// functional tests make sense as well because they help you code faster in many ways. I did this just to show I can write tests.
// I do however belive in backend testing and feel that it helps the process of coding.
// its like we test all the basic stuff but actually testing the fringe cases that could actually be issues is massivly difficult to write tests for.
// this doesn't even catch the actuly defects so you could still get them.
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let emailExistsValidator: jasmine.SpyObj<EmailExistsValidator>;
  let registerService: jasmine.SpyObj<UserRegistrationService>;
  let fb: FormBuilder;

  beforeEach(() => {
    emailExistsValidator = jasmine.createSpyObj('EmailExistsValidator', ['validate']);
    registerService = jasmine.createSpyObj('UserRegistrationService', ['register']);
    fb = new FormBuilder();
    component = new RegisterComponent(emailExistsValidator, fb, registerService);
  });

  // like why
  it('should create the form with all the fields and validators', () => {
    component.ngOnInit();
    expect(component.registerForm.contains('email')).toBeTrue();
    expect(component.registerForm.contains('password')).toBeTrue();
    expect(component.registerForm.contains('confirmPassword')).toBeTrue();
    expect(component.registerForm.contains('username')).toBeTrue();
  });

  it('should not submit the form if it is invalid', fakeAsync(() => {
    emailExistsValidator.validate.and.returnValue(of(null));
    component.ngOnInit();
    component.onSubmit();
    tick();
    expect(registerService.register).not.toHaveBeenCalled();
  }));

  it('should submit the form if it is valid', fakeAsync(() => {
    emailExistsValidator.validate.and.returnValue(of(null));
    registerService.register.and.returnValue(of(null));
    component.ngOnInit();
    component.registerForm.setValue({
      email: 'test@example.com',
      password: 'Test123!',
      confirmPassword: 'Test123!',
      username: 'test'
    });
    component.onSubmit();
    tick();
    expect(registerService.register).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'Test123!',
      confirmPassword: 'Test123!',
      username: 'test'
    });
  }));

  // Write similar tests for confirmPasswordValidator and PasswordStrengthValidator
  //...

});
