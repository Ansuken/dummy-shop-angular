import { Component } from '@angular/core';
import { messages } from '../../../../app/constants/messages';

@Component({
    selector: 'app-no-products',
    templateUrl: './no-products.component.html',
    styleUrls: ['./no-products.component.scss']
})
export class NoProductsComponent {
    public messages = messages;
}
