import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
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
import { ShopService } from '../../app/shop/services';

@Injectable()
export class ProductsEffects {

    constructor(
        private actions$: Actions,
        private shopService: ShopService
    ){}

    getProducts$ = createEffect(
        () => this.actions$.pipe(
            ofType( getProducts ),
            mergeMap(
                (action) => this.shopService.getProducts(action.skip, action.limit)
                    .pipe(
                        map( products => getProductsSuccess({ products }) ),
                        catchError( err => of(getProductsError({ payload: err })) )
                    )
            )
        )
    );

    addProduct$ = createEffect(
        () => this.actions$.pipe(
            ofType( addProduct ),
            mergeMap(
                (action) => this.shopService.addProduct(action.product)
                    .pipe(
                        map( product => addProductSuccess({ product }) ),
                        catchError( err => of(addProductError({ payload: err })) )
                    )
            )
        )
    );

    updateProduct$ = createEffect(
        () => this.actions$.pipe(
            ofType( updateProduct ),
            mergeMap(
                (action) => this.shopService.updateProduct(action.product)
                    .pipe(
                        map( product => updateProductSuccess({ product }) ),
                        catchError( err => of(updateProductError({ payload: err })) )
                    )
            )
        )
    );

    deleteProduct$ = createEffect(
        () => this.actions$.pipe(
            ofType( deleteProduct ),
            mergeMap(
                (action) => this.shopService.deleteProduct(action.product)
                    .pipe(
                        map( product => deleteProductSuccess({ product }) ),
                        catchError( err => of(deleteProductError({ payload: err })) )
                    )
            )
        )
    );

    getFavourites$ = createEffect(
        () => this.actions$.pipe(
            ofType( getFavourites ),
            mergeMap(
                () => of(this.shopService.getFavourites())
                    .pipe(
                        map( favourites => getFavouritesSuccess({ favourites }))
                    )
            )
        )
    );

    setFavourite$ = createEffect(
        () => this.actions$.pipe(
            ofType( setFavourite ),
            mergeMap(
                (action) => of(this.shopService.setFavourite(action.product))
                    .pipe(
                        map( favourites => setFavouriteSuccess({ favourites }))
                    )
            )
        )
    );
}