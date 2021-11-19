import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(public auth: AngularFireAuth,
    private router: Router) {
    this.user = this.auth.user;
  }
  login(email: string, pass: string) {
    this.auth.signInWithEmailAndPassword(email, pass).then(value => {
      console.log('Nice, it worked!');
      this.router.navigateByUrl('/');
    })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      });

  }
  logout() {
    this.auth.signOut();
  }
  googleSigning() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  signup(email: string, pass: string) {
    this.auth.createUserWithEmailAndPassword(email, pass)
      .then(value => {
        console.log('Sucess', value);
      }
      )
      .catch(error => {
        console.log('Something went wrong: ', error);
      });

  }
}


