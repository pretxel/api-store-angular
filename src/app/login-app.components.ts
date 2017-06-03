import { Component } from '@angular/core';
import { Globals } from './commons/globals';


@Component({
    selector: 'my-app',
    providers: [Globals],
    template: `
        <app-header></app-header>
        <app-login></app-login>
    `,
})
export class LoginAppComponent  {
    name = 'Edsel';
    isAuth = false;

    constructor(private globals: Globals){
        this.isAuth = globals.isAuth;
    }

}
