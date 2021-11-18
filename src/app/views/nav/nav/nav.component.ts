import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {


  constructor(public auth: AuthService, public dialog: MatDialog) {
    console.log(this.auth.user);
  }
  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  signOut() {
    this.auth.logout();
  }
}
