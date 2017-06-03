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
var globals_1 = require("./commons/globals");
var ProductComponent = (function () {
    function ProductComponent(globals) {
        this.globals = globals;
        this.token = '';
        this.token = globals.token;
        console.log(this.token);
    }
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        providers: [globals_1.Globals],
        template: "        \n        <app-header></app-header>\n        <app-list-products></app-list-products>\n    ",
    }),
    __metadata("design:paramtypes", [globals_1.Globals])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=products.component.js.map