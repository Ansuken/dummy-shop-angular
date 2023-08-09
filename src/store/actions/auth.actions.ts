import { createAction, props } from '@ngrx/store';
import { User } from '../../app/shared/interfaces';
import { LoginParams } from '../../app/auth/interfaces';

export const onLogin = createAction(
    '[AUTH] On Login',
    props<{username: string, password: string}>()
);

export const onLoginSuccess = createAction(
    '[SHOP] On Login Success',
    props<{ currentUser: User }>()
);

export const onLoginError = createAction(
    '[SHOP] On Login Error',
    props<{ payload: any }>()
);

export const getUser = createAction(
    '[AUTH] Get user'
)

export const getUserSuccess = createAction(
    '[AUTH] Get user Success',
    props<{ currentUser: User }>()
)