import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.reducers';
import { getUser } from '../../../../store/actions';

@Component({
    selector: 'app-layout-page',
    templateUrl: './layout-page.component.html',
    styles: []
})
export class LayoutPageComponent implements OnInit {

    constructor ( private store: Store<AppState> ){}
    ngOnInit(): void {
        this.store.dispatch( getUser() );
    }
}