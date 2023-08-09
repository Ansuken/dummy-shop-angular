import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../services';

@Component({
    selector: 'shared-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
    public isLoading: Subject<boolean> = this.loaderService.isLoading;
    constructor(private loaderService: LoaderService) {}
}
