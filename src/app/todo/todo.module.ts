import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { MatFormField, MatFormFieldModule, MAT_DATE_LOCALE_PROVIDER, 
  MatDatepicker, MatDatepickerModule, MatNativeDateModule, 
  _MatInputMixinBase, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatGridListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TodoComponent]
})
export class TodoModule { }
