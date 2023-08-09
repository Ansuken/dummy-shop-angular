import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { environments } from '../../../environments/environments';
import { LoginParams } from '../interfaces';
import { User } from '../../../app/shared/interfaces';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl = environments.apiUrl;

    constructor(private http: HttpClient) { }

    login(params: LoginParams):Observable<User> {
        return this.http.post<User>(`${ this.apiUrl }/login`, params)
            .pipe(
                tap( user => {
                    const jwtPayload = JSON.parse(window.atob(user.token.split('.')[1]))
                    localStorage.setItem('token', user.token );
                    localStorage.setItem('expiresAt', jwtPayload.exp)
                })
            );
    }

    checkAuthentication(): boolean {
        const now = new Date().getTime()/1000;
        return !!localStorage.getItem('token')
            && parseInt(localStorage.getItem('expiresAt') || '0') >= now;
    }

    getCurrentUser(): User {
        return JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));
    }

    logout(): void {
        localStorage.clear();
    }
}
