import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { SignUpComponent } from '../auth/signup/signup.component';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openSignup(): void {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '40%'
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }

  openLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '40%'
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }

  ngOnInit() {
  }

}