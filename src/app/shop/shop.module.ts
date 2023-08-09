import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';

import { ShopRoutingModule } from './shop-routing.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ShopListPageComponent } from './pages/shop-list/shop-list-page.component';
import { FavouritesPageComponent } from './pages/favourites/favourites-page.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { NoProductsComponent } from './components/no-products/no-products.component';
import { PageTitleComponent } from './components/page-title/page-title.component';


@NgModule({
    declarations: [
        NavbarComponent,
        LayoutPageComponent,
        ShopListPageComponent,
        FavouritesPageComponent,
        ProductItemComponent,
        NoProductsComponent,
        PageTitleComponent
    ],
    imports: [
        CommonModule,
        ShopRoutingModule,
        NgxPaginationModule
    ]
})
export class ShopModule { }