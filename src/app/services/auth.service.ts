import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(public auth: AngularFireAuth) {
    this.user = this.auth;
  }
  login(email: string, pass: string) {
    this.auth.signInWithEmailAndPassword(email, pass)

  }
  logout() {
    this.auth.signOut();
  }
  googleSigning() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  signup(email: string, pass: string) {
    this.auth.createUserWithEmailAndPassword(email, pass)

  }
}


