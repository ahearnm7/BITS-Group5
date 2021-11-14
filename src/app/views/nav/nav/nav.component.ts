import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  user: AuthService;

  constructor(public auth: AuthService) {
    this.user = auth
  }

  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
}
