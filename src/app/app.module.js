"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var products_component_1 = require("./products.component");
var login_app_components_1 = require("./login-app.components");
var header_component_1 = require("./commons/header.component");
var login_component_1 = require("./components/login.component");
var list_products_component_1 = require("./components/list-products.component");
var appRoutes = [
    { path: '', component: login_app_components_1.LoginAppComponent },
    { path: 'products', component: products_component_1.ProductComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(appRoutes), platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule],
        exports: [router_1.RouterModule],
        declarations: [app_component_1.AppComponent, login_app_components_1.LoginAppComponent, header_component_1.HeaderComponent, login_component_1.LoginComponent, list_products_component_1.ListComponent, products_component_1.ProductComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map