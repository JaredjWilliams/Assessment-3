import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/service';
import { Store } from '@ngrx/store';
import { AuthState } from '../auth/reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private store: Store<AuthState>
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required], 
      password: ['', [Validators.required, Validators.minLength(6)]] 
    });
  }

  signIn() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      this.authService.login(username, password).subscribe(
        (user: any) => {
          console.log(`Successful login: ${user}`);
        },
        (error: any) => {
          console.log(`Login Error : ${error}`);
        }
      );
    }
  }
}
