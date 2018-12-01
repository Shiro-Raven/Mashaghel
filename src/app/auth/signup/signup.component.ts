import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup-component',
  templateUrl: 'signup.component.html',
})
export class SignUpComponent {
  email: string;
  password: string;
  confirmPassword: string;
  alerts: boolean;

  constructor(
    public dialogRef: MatDialogRef<SignUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public authService: AuthService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.alerts = true;
    if (this.password !== this.confirmPassword) {
      alert('Confirm password is incorrect');
    } else if (this.password.length < 8) {
      alert('Password should be 8 characters minimum');
    } else if (!this.authService.emailRegex.test(this.email)) {
      alert('Email format is incorrect');
    } else {
      const signUpData = {
        email: this.email,
        password: this.password
      };

      const _this = this;
      this.authService.signUp(signUpData).subscribe(function (res) {
        _this.authService.LoggedInUser = res.data.email;
        alert('Sign-Up successful');
        _this.dialogRef.close(true);
      }, function (err) {
        alert(err.error.message);
      });
    }
  }
}
