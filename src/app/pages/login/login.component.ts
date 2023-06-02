import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {}

  login() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((result : any) => {
      console.log(result);
    });
  }

  register() {
    this.router.navigate(['/register']);
  }

  recoverPassword() {
    // this.router.navigate(['/recover-password']);
  }

}
