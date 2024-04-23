import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthState } from '../auth/auth.reducer';
import { loginRequest } from '../auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AuthState>
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required], 
      password: ['', [Validators.required, Validators.minLength(6)]] 
    });
  }

  signIn() {
    if (this.loginForm.valid) {
      const username:string = this.loginForm.value.username;
      const password:string = this.loginForm.value.password;
      const creds = {username, password};
      this.store.dispatch(loginRequest({creds}))
      // this.authService.login(username, password).subscribe(
      //   (user: any) => {
      //     console.log(`Successful login: ${user}`);
      //   },
      //   (error: any) => {
      //     console.log(`Login Error : ${error}`);
      //   }
      // );
    }
  }
}
