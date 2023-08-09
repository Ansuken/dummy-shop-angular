import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { AppState } from '../../../../store/app.reducers';
import { onLogin } from '../../../../store/actions';
import { LoginParams } from '../../interfaces/login-params.interface';
import { messages } from '../../../../app/constants/messages';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    public form!: FormGroup;
    public messages = messages;

    constructor( 
        private router: Router,
        private fb: FormBuilder,
        private store: Store<AppState> ) {}

    ngOnInit(): void {
        this.store.select('currentUser').subscribe( ( currentUser ) => {
            this.router.navigate(['/shop/list']);
        });
        this.createForm();
    }
    createForm() {
        this.form = this.fb.group({
            username: new FormControl('kminchelle', Validators.required),
            password: new FormControl('0lelplR', Validators.required)
        });
    }

    onSubmit( formData: LoginParams): void {
        this.store.dispatch( onLogin(formData) );
    }
}