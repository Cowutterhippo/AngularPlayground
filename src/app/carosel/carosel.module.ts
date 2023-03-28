import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaroselComponent } from './carosel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CaroselComponent],
  exports: [CaroselComponent]
})
export class CaroselModule { }
