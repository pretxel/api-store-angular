import { Component } from '@angular/core';
import { Globals } from './commons/globals';


@Component({
  selector: 'my-app',
  providers: [Globals],
  template: `
      <router-outlet></router-outlet>
  `,
})
export class AppComponent  {
  name = 'Edsel';
  isAuth = false;

  constructor(private globals: Globals){
    this.isAuth = globals.isAuth;
  }

}
