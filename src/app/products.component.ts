import { Component } from '@angular/core';
import { Globals } from './commons/globals';


@Component({
    selector: 'my-app',
    providers: [Globals],
    template: `        
        <app-header></app-header>
        <app-list-products></app-list-products>
    `,
})
export class ProductComponent  {
    token = '';

    constructor(private globals: Globals){
        this.token = globals.token;

        console.log(this.token);

    }

}
