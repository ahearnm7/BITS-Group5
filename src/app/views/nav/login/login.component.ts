import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: AuthService;
  signup: boolean;

  constructor(public auth: AuthService, private fb: FormBuilder) {
    this.user = auth
    this.signup = true;
  }

  isSignedUp() {
    if (this.signup) {
      this.signup = false;
    } else {
      this.signup = true;
    }
  }
  signUp(email: string, pass: string) {
    this.auth.signup(email, pass);
  }
  login(email: string, pass: string) {
    this.auth.login(email, pass);
  }
  logout() {
    this.auth.logout();
  }
  googleLogin() {
    this.auth.googleSigning();
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  password2 = new FormControl('', [Validators.required]);

  onSubmit() {
    if (this.signup) {
      this.signUp(this.emailFormControl.value, this.passFormControl.value);
    } else {
      this.login(this.emailFormControl.value, this.passFormControl.value);
    }
  }
}
