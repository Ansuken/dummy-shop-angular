import { createReducer, on } from '@ngrx/store';
import { 
    getProducts,
    getProductsSuccess,
    getProductsError,
    getFavourites,
    getFavouritesSuccess,
    setFavourite,
    setFavouriteSuccess,
    addProduct,
    addProductSuccess,
    addProductError,
    updateProduct,
    updateProductSuccess,
    updateProductError,
    deleteProduct,
    deleteProductSuccess,
    deleteProductError
} from '../actions';
import { Products } from '../../app/shop/interfaces';

export const productsInitialState: Products = {
    products: [],
    total: 0,
    skip: 0,
    limit: 10
}

export const favouriteInitialState: Products = {
    products: []
}

const _productsReducer = createReducer(productsInitialState,

    on( getProducts, state => ({ ...state })),
    
    on( getProductsSuccess, (state, { products }) => {
        return { 
            ...state, 
            ...products 
        }
    }),

    on( getProductsError, (state, { payload }) => ({ 
        ...state, 
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),

    on( addProduct, state => ({ ...state })),
    
    on( addProductSuccess, (state, { product }) => {
        return { 
            ...state, 
            ...product 
        }
    }),

    on( addProductError, (state, { payload }) => ({ 
        ...state, 
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),

    on( updateProduct, state => ({ ...state })),
    
    on( updateProductSuccess, (state, { product }) => {
        return { 
            ...state, 
            ...product 
        }
    }),

    on( updateProductError, (state, { payload }) => ({ 
        ...state, 
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),

    on( deleteProduct, state => ({ ...state })),
    
    on( deleteProductSuccess, (state, { product }) => {
        return { 
            ...state, 
            ...product 
        }
    }),

    on( deleteProductError, (state, { payload }) => ({ 
        ...state, 
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    }))
);

const _favouritesReducer = createReducer(favouriteInitialState,

    on( getFavourites, state => ({ ...state })),
    
    on( getFavouritesSuccess, (state, { favourites }) => {
        return {
            ...state,
            ...favourites
        }
    }),

    on( setFavourite, state => ({ ...state })),

    on( setFavouriteSuccess, (state,  {favourites} ) => {
        return {
            ...state,
            ...favourites
        }
    }),
);

export function productsReducer(state: any, action: any) {
    return _productsReducer(state, action);
}

export function favouritesReducer(state: any, action: any) {
    return _favouritesReducer(state, action);
}