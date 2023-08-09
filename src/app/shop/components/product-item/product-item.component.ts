import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Product } from '../../interfaces';
import { AppState } from '../../../../store/app.reducers';
import { setFavourite } from '../../../../store/actions';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
    @Input() 
    public product: Product = {
        id: 0,
        title: '',
        description: '',
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: '',
        category: '',
        thumbnail: '',
        images: []
    };
    public isFav = false;

    constructor( private store: Store<AppState> ) {}

    ngOnInit(): void {
        this.store.select('favourites').subscribe(() => {
            this.checkIfFavourite();
        });
    }
    checkIfFavourite(): void {
        if ( !localStorage.getItem('favourites') ) return;
        const favourites = JSON.parse(localStorage.getItem('favourites') || '{}');
        this.isFav = favourites.find((prod: Product) => prod.id === this.product.id)
    }
    onFavourite( product: Product ): void {
        this.store.dispatch( setFavourite({ product }) );
    }
}
