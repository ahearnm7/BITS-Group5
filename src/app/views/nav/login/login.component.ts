import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: AuthService;
  signup: boolean = false;
  isSubmitted = false;
  authForm: FormGroup;

  constructor(public authservice: AuthService, private fb: FormBuilder) {
    this.user = authservice.user;
    this.authForm = this.fb.group({
      username: [''],
      emailFormControl: ['', [Validators.required, Validators.email]],
      passFormControl: ['', [Validators.required, Validators.minLength(8)]]
    });

  }


  isSignedUp() {
    if (this.signup) {
      this.signup = false;
    } else {
      this.signup = true;
    }
  }
  signUp(email: string, pass: string) {
    this.authservice.signup(email, pass);
  }
  login(email: string, pass: string) {
    this.authservice.login(email, pass);
  }
  logout() {
    this.authservice.logout();
  }
  googleLogin() {
    this.authservice.googleSigning();
  }



  onSubmit() {
    // signing in
    if (!this.signup) {
      if (this.authForm.valid) {
        this.authservice.login(this.authForm.get('emailFormControl')?.value, this.authForm.get('passFormControl')?.value);
      }
    } else {
      // signing up
      this.signup = false;
      if (this.authForm.valid) {
        this.authservice.signup(this.authForm.get('emailFormControl')?.value, this.authForm.get('passFormControl')?.value);
      }

    }
  }
}
