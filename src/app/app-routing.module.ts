import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/guards/auth.guard';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
/*       canActivate: [ PublicGuard ],
        canMatch: [ PublicGuard ] */
    },
    {
        path: 'shop',
        loadChildren: () => import('./shop/shop.module').then( m => m.ShopModule ),
        canActivate: [ authGuard ],
        canMatch: [ authGuard ]
    },
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'auth',
    }
  ];
  
  @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
  })
  export class AppRoutingModule { }