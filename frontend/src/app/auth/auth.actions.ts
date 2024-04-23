import { createAction, props } from '@ngrx/store';
import User from '../models/User';


export const loginRequest = createAction(
  '[Auth] Login Request',
  props<{ creds: {username: string; password: string}}>()
);

export const loginSuccess = createAction(
  '[Auth] Login Request Success',
  props<{ loginSuccessResp: User}>()
);

export const loginFailure = createAction(
  '[Auth] Login Request Failure',
  props<{ loginFailureResp: string}>()
);

export const logout = createAction(
  '[Auth] Logout'
);