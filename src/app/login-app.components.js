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
var LoginAppComponent = (function () {
    function LoginAppComponent(globals) {
        this.globals = globals;
        this.name = 'Edsel';
        this.isAuth = false;
        this.isAuth = globals.isAuth;
    }
    return LoginAppComponent;
}());
LoginAppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        providers: [globals_1.Globals],
        template: "\n        <app-header></app-header>\n        <app-login></app-login>\n    ",
    }),
    __metadata("design:paramtypes", [globals_1.Globals])
], LoginAppComponent);
exports.LoginAppComponent = LoginAppComponent;
//# sourceMappingURL=login-app.components.js.map