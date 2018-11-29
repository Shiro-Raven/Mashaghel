import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import {TodoModule} from './todo/todo.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    TodoModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
