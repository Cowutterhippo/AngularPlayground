import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericFormsModuleComponent } from './generic-forms-module.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [GenericFormsModuleComponent],
  exports: [GenericFormsModuleComponent]
})
export class GenericFormsModuleModule { }
