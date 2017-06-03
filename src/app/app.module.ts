import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { ProductComponent } from './products.component';
import { LoginAppComponent } from './login-app.components';
import { HeaderComponent }  from './commons/header.component';
import { LoginComponent }  from './components/login.component';
import { ListComponent }  from './components/list-products.component';


const appRoutes: Routes = [
  { path: '', component: LoginAppComponent },
  { path: 'products', component: ProductComponent },
];


@NgModule({
  imports:      [ RouterModule.forRoot(appRoutes), BrowserModule, FormsModule, HttpModule, JsonpModule ],
  exports: [ RouterModule ],
  declarations: [ AppComponent, LoginAppComponent, HeaderComponent, LoginComponent, ListComponent, ProductComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
