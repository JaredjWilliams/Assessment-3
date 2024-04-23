import { AuthActionTypes } from '../auth/actions';

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

export function authReducer(state = initialState, action: { type: any; payload: { user: any; error: any; }; }): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user,
        error: null,
      };
    case AuthActionTypes.LoginFailure:
      return {
        ...state,
        loggedIn: false,
        user: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
}