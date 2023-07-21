import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxTodosDataService } from './services/ngrx-todos-data.service';
import { NgrxTodosStorageService } from './services/ngrx-todos-storage.service';
import { NgrxTodosComponent } from './container/ngrx-todos.component';


@NgModule({
  declarations: [
    NgrxTodosComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [ NgrxTodosDataService, NgrxTodosStorageService ]
})
export class NgrxTodosModule { }
