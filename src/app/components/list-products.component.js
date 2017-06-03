"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_service_1 = require("../components/product.service");
var globals_1 = require("../commons/globals");
var ListComponent = (function () {
    function ListComponent(productService, globals) {
        this.productService = productService;
        this.globals = globals;
        this.token = '';
        this.errorMessage = '';
    }
    ListComponent.prototype.getProductos = function (value) {
        var _this = this;
        console.log(value);
        this.productService.products(value).subscribe(function (res) {
            console.log(res);
            //this.token = token['token'];
            //alert(this.token)   ;
        }, function (error) {
            _this.errorMessage = error;
        });
        return false;
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: 'app-list-products',
        providers: [product_service_1.ProductService, globals_1.Globals],
        templateUrl: './list-products.component.html'
    }),
    core_1.Component({
        selector: 'my-app',
        providers: [product_service_1.ProductService, globals_1.Globals],
        template: "\n        <app-header></app-header>\n        <app-login></app-login>\n        <app-list-products *ngIf=\"isAuth\"></app-list-products>\n    ",
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, globals_1.Globals])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list-products.component.js.map