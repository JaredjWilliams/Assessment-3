import { Action } from '@ngrx/store';


export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: { username: string, password: string }) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: { user: any }) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;
  constructor(public payload: { error: any }) {}
}