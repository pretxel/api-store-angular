import { Component } from '@angular/core';
import { ProductService } from '../components/product.service';
import { Globals} from '../commons/globals';

@Component({
    selector: 'app-list-products',
    providers: [ProductService, Globals],
    templateUrl: './list-products.component.html'
})

@Component({
    selector: 'my-app',
    providers: [ProductService, Globals],
    template: `
        <app-header></app-header>
        <app-login></app-login>
        <app-list-products *ngIf="isAuth"></app-list-products>
    `,
})

export class ListComponent {

    token='';
    errorMessage = '';

    constructor(private productService: ProductService, private globals: Globals) {


    }

    getProductos(value: string){

        console.log(value);
        this.productService.products(value).subscribe(
            res => {
                console.log(res);
                //this.token = token['token'];
                //alert(this.token)   ;
            },
            error =>  {
                this.errorMessage = <any>error;
            }
        );

        return false;
    }



}

