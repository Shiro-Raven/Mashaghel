import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { MatButtonModule, MatDialogModule } from '@angular/material';

import { LandingComponent } from './landing/landing.component';
import { SignUpComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';

import { AppRoutingModule } from './app-routing.module';
import { CreateTodoComponent } from './todo/create-todo/create-todo.component';
import { MapComponent } from './todo/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    AppRoutingModule,
    TodoModule,
    AuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule,
    TodoModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SignUpComponent, LoginComponent, CreateTodoComponent, MapComponent]
})
export class AppModule { }
