import { createAction, props } from '@ngrx/store';
import { Product, Products } from '../../app/shop/interfaces';

export const getProducts = createAction(
    '[SHOP] Get Products',
    props<{skip: number, limit: number}>()
);

export const getProductsSuccess = createAction(
    '[SHOP] Get Products Success',
    props<{ products: Products }>()
);

export const getProductsError = createAction(
    '[SHOP] Get Products Error',
    props<{ payload: any }>()
);

export const getFavourites = createAction(
    '[FAV] Get Favourites'
);

export const getFavouritesSuccess = createAction(
    '[FAV] Get Favourites Success',
    props<{ favourites: Products }>()
);

export const setFavourite = createAction(
    '[FAV] Set Favourite',
    props<{ product: Product }>()
);

export const setFavouriteSuccess = createAction(
    '[FAV] Set Favourite Success',
    props<{ favourites: Products }>()
);

export const addProduct = createAction(
    '[SHOP] Add Product',
    props<{ product: Product }>()
);

export const addProductSuccess = createAction(
    '[SHOP] Add Product Success',
    props<{ product: Product }>()
);

export const addProductError = createAction(
    '[SHOP] Add Product Error',
    props<{ payload: any }>()
);

export const updateProduct = createAction(
    '[SHOP] Update Product',
    props<{ product: Product }>()
);

export const updateProductSuccess = createAction(
    '[SHOP] Update Product Success',
    props<{ product: Product }>()
);

export const updateProductError = createAction(
    '[SHOP] Update Product Error',
    props<{ payload: any }>()
);

export const deleteProduct = createAction(
    '[SHOP] Delete Product',
    props<{ product: Product }>()
);

export const deleteProductSuccess = createAction(
    '[SHOP] Delete Product Success',
    props<{ product: Product }>()
);

export const deleteProductError = createAction(
    '[SHOP] Delete Product Error',
    props<{ payload: any }>()
);