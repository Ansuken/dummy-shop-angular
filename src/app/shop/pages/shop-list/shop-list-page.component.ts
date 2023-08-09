import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../../store/app.reducers';
import { getProducts } from '../../../../store/actions';
import { Products } from '../../interfaces';
import { messages } from '../../../../app/constants/messages';

@Component({
    selector: 'app-shop-list-page',
    templateUrl: './shop-list-page.component.html',
    styleUrls: ['./shop-list-page.component.scss']
})
export class ShopListPageComponent implements OnInit {
  
    public products: Products = {
        products: [],
        limit: 10,
        skip: 0,
        total: 0
    };
    public page = 1;
    public haveMoreProducts: boolean = true;
    public messages = messages;

    constructor( private store: Store<AppState> ) {
        this.getProductsCollection(this.products.limit || 10, this.products.skip || 0);
    }

    ngOnInit(): void {
        this.store.select('products').subscribe( ( products ) => {
            this.products = products;
            this.page = this.getPage();
        });
    }

    getProductsCollection( limit: number, skip: number ): void {
        this.store.dispatch( getProducts({limit, skip}) );
    }

    getPage(): number {
        return ( this.products.skip || 0 ) / ( this.products.limit || 10 ) + 1
    }

    loadMore( event:number ): void {
        const skip = (event - 1)  * ( this.products.limit || 10 );
        this.getProductsCollection(this.products.limit || 10, skip || 0);
    }
}