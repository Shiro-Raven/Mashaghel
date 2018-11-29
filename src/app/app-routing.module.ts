import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { LandingComponent } from './landing/landing.component';
import { TodoComponent } from './todo/todo/todo.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'todos', component: TodoComponent, pathMatch: 'full' },
  { path: '**', component: AppComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
