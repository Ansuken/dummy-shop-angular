import { createReducer, on } from '@ngrx/store';
import { 
    onLogin,
    onLoginSuccess,
    onLoginError,
    getUser,
    getUserSuccess
} from '../actions';
import { User } from '../../app/shared/interfaces';

export const userInitialState: User = {
    id: 0,
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    image: '',
    token: '',
}

const _authReducer = createReducer(userInitialState,

    on( onLogin, state => ({ ...state })),
    
    on( onLoginSuccess, (state, { currentUser }) => {
        return { 
            ...state, 
            ...currentUser 
        }
    }),

    on( onLoginError, (state, { payload }) => ({ 
        ...state, 
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),

    on( getUser, state => ({...state})),

    on( getUserSuccess, (state, { currentUser }) => ({
        ...state, 
        ...currentUser
    }))
);

export function authReducer(state: any, action: any) {
    return _authReducer(state, action);
}