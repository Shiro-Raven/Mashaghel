import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { MatFormField, MatFormFieldModule, MAT_DATE_LOCALE_PROVIDER, 
  MatDatepicker, MatDatepickerModule, MatNativeDateModule, _MatInputMixinBase, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  declarations: [TodoComponent]
})
export class TodoModule { }
