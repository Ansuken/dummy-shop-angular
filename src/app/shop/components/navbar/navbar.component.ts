import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../../../auth/services/auth.service';
import { AppState } from '../../../../store/app.reducers';
import { getFavourites } from '../../../../store/actions';
import { messages } from '../../../../app/constants/messages';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

    public total: number = 0;
    public fullName: string = '';
    public messages = messages;

    constructor( 
        private authService: AuthService,
        private store: Store<AppState>,
        private router: Router
    ) {}

    ngOnInit(): void {

        this.store.select('favourites').subscribe( ( products ) => {
            this.total = products.products.length;
        });
        this.store.select('currentUser').subscribe( ( currentUser ) => {
            this.fullName = `${currentUser.firstName} ${currentUser.lastName}`;
        });
        this.store.dispatch( getFavourites() );
    }

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }
}
