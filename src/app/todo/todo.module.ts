import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { MatFormField, MatFormFieldModule, MAT_DATE_LOCALE_PROVIDER,
  MatDatepicker, MatDatepickerModule, MatNativeDateModule,
  _MatInputMixinBase, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatGridListModule, MatDialogModule, MatListModule, MatSelectModule, MatOptionModule, MatChipsModule, MatStepperModule, MatCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoService } from './todo.service';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdpRX211Yu77Vwm0NNwjceaLdeLOurd8A'
    }),
    MatStepperModule,
    MatCheckboxModule
  ],
  providers: [TodoService],
  declarations: [TodoComponent, CreateTodoComponent, MapComponent]
})
export class TodoModule { }
