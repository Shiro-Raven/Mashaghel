import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {TodoComponent} from './todo/todo/todo.component';
const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  {path: 'todos', component: TodoComponent}

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
