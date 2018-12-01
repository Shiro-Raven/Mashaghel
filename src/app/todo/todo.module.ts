import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { MatFormField, MatFormFieldModule, MAT_DATE_LOCALE_PROVIDER,
  MatDatepicker, MatDatepickerModule, MatNativeDateModule,
  _MatInputMixinBase, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatGridListModule, MatDialogModule, MatListModule, MatSelectModule, MatOptionModule, MatChipsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoService } from './todo.service';

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
    MatDialogModule,
    MatListModule,
    ReactiveFormsModule,
    MatSelectModule, MatOptionModule,
    MatChipsModule,
  ],
  providers: [TodoService],
  declarations: [TodoComponent, CreateTodoComponent]
})
export class TodoModule { }
