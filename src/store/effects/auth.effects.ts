import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import {
    onLogin,
    onLoginSuccess,
    onLoginError,
    getUser, 
    getUserSuccess
} from '../actions';
import { AuthService } from '../../app/auth/services/auth.service';

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ){}

    onLogin$ = createEffect(
        () => this.actions$.pipe(
            ofType( onLogin ),
            mergeMap(
                (action) => this.authService.login({username: action.username, password: action.password})
                    .pipe(
                        map( currentUser => onLoginSuccess({ currentUser }) ),
                        catchError( err => of(onLoginError({ payload: err })) )
                    )
            )
        )
    );

    getUser$ = createEffect(
        () => this.actions$.pipe(
            ofType( getUser ),
            mergeMap(
                () => of(this.authService.getCurrentUser())
                    .pipe(
                        map( currentUser => getUserSuccess({ currentUser }))
                    )
            )
        )
    );
}