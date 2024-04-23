import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { AuthService } from '../auth/service';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Login, LoginSuccess, LoginFailure, AuthActionTypes } from './actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    mergeMap((action: Login) => this.authService.login(action.payload.username, action.payload.password)
      .pipe(
        map(user => new LoginSuccess({ user })),
        catchError(error => of(new LoginFailure({ error })))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}