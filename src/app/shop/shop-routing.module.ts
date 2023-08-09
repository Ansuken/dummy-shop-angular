import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ShopListPageComponent } from './pages/shop-list/shop-list-page.component';
import { FavouritesPageComponent } from './pages/favourites/favourites-page.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            { path: 'list', component: ShopListPageComponent },
            { path: 'favourites', component: FavouritesPageComponent },
            { path: '**', redirectTo: 'list' },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }