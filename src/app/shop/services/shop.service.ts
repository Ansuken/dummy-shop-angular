import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environments } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { Product, Products } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class ShopService {

    private apiUrl = environments.apiUrl;

    constructor(private http: HttpClient) { }

    getProducts(skip: number, limit: number):Observable<Products> {
        return this.http
            .get<Products>(`${ this.apiUrl }/products?limit=${limit}&skip=${skip}`);
    }

    addProduct( product: Product ):Observable<Product> {
        return this.http
            .post<Product>(`${ this.apiUrl }/products/add`, product);
    }

    updateProduct( product: Product ):Observable<Product> {
        return this.http
            .put<Product>(`${ this.apiUrl }/products/${product.id}`, product);
    }

    deleteProduct( product: Product ):Observable<Product> {
        return this.http
            .delete<Product>(`${ this.apiUrl }/products/${product.id}`);
    }

    getFavourites(): Products {
        return {
            products: JSON.parse(localStorage.getItem('favourites') || '[]')
        }
    }

    setFavourite( product: Product ) {
        let favourites = localStorage.getItem('favourites')
            ? JSON.parse(localStorage.getItem('favourites') || '')
            : [];
        if ( !favourites.find((prod: Product) => prod.id === product.id) ) {
            favourites.push(product);
        } else {
            favourites = favourites.filter((prod: Product) => prod.id !== product.id);
        }
        localStorage.setItem('favourites', JSON.stringify(favourites));
        return {
            products: favourites
        };
    }
}
