import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailExistsValidator } from './user-exists-validator.service';
import { HttpClientModule } from '@angular/common/http';
import { UserRegistrationService } from './register.service';

const routes: Routes = [
  {
      path     : '',
      component: RegisterComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [RegisterComponent],
  providers: [
    EmailExistsValidator,
    UserRegistrationService
  ]
})
export class RegisterModule { }
