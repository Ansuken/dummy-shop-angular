import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';
import { Products } from '../app/shop/interfaces';
import { User } from '../app/shared/interfaces';

export interface AppState {
   products: Products,
   favourites: Products,
   currentUser: User
}

export const appReducers: ActionReducerMap<AppState> = {
   products: reducers.productsReducer,
   favourites: reducers.favouritesReducer,
   currentUser: reducers.authReducer
}