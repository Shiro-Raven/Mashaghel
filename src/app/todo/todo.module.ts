import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import {
  MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,
  _MatInputMixinBase, MatInputModule, MatButtonModule, MatIconModule,
  MatCardModule, MatGridListModule, MatDialogModule, MatListModule,
  MatSelectModule, MatOptionModule, MatChipsModule, MatStepperModule, MatCheckboxModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoService } from './todo.service';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';

import { environment } from '../../environments/environment';

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
      apiKey: environment.mapsKey
    }),
    MatStepperModule,
    MatCheckboxModule
  ],
  providers: [TodoService, CookieService],
  declarations: [TodoComponent, CreateTodoComponent, MapComponent]
})
export class TodoModule { }
