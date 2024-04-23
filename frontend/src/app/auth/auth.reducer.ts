import { Action, State, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { loginFailure, loginSuccess } from './auth.actions';

export interface AuthState {
  loggedIn: boolean;
  user: any;
  error: any;
}

export const initialState: AuthState = {
  loggedIn: false,
  user: null,
  error: null,
};

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { loginSuccessResp }) => {
    return {
      ...state,
      loggedIn: true,
      user: loginSuccessResp,
      error: null,
    };
  }), 
  on(loginFailure, (state, { loginFailureResp }) => {
    return {
      ...state,
      loggedIn: false,
      user: null,
      error: loginFailureResp,
    };
  }), 
)

export function authReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectLoggedIn = createSelector(selectAuthState, s => s.loggedIn);

export const selectUser = createSelector( selectAuthState, s => s.user);

export const selectIsAdmin = createSelector( selectAuthState, s => s.user && s.user.admin);
