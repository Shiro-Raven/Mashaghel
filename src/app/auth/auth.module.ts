import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule, MatInputModule, MatButtonModule } from '@angular/material';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule
  ],
  declarations: [SignUpComponent, LoginComponent],
  entryComponents: [],
  providers: [AuthService]
})
export class AuthModule { }
