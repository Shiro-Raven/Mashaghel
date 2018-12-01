import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public authService: AuthService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (!this.authService.emailRegex.test(this.email)) {
      alert('Wrong email format!');
    } else {
      const signInData = {
        email: this.email,
        password: this.password
      };

      const _this = this;
      this.authService.signIn(signInData).subscribe(function (res) {
        _this.authService.LoggedInUser = res.data.email;
        _this.dialogRef.close(true);
      }, function (err) {
        alert(err.error.message);
      });
    }
  }
}
