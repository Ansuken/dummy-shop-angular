import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../../store/app.reducers';
import { getFavourites } from '../../../../store/actions';
import { Products } from '../../interfaces';
import { messages } from '../../../../app/constants/messages';

@Component({
    selector: 'app-favourites-page',
    templateUrl: './favourites-page.component.html',
    styleUrls: ['./favourites-page.component.scss']
})
export class FavouritesPageComponent implements OnInit {

    public products: Products = {
        products: []
    };
    public messages = messages;

    constructor( private store: Store<AppState> ) {}

    ngOnInit(): void {
        this.store.select('favourites').subscribe( ( products ) => {
            this.products = products;
        }); 
        this.getFavouritesCollection();
    }

    getFavouritesCollection(): void {
        this.store.dispatch( getFavourites() );
    }
}