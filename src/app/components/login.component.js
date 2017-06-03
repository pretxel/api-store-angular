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
var user_service_1 = require("../components/user.service");
var globals_1 = require("../commons/globals");
var LoginComponent = (function () {
    function LoginComponent(userService, globals) {
        this.userService = userService;
        this.globals = globals;
        this.email = '';
        this.password = '';
        this.errorMessage = '';
        this.token = '';
        this.userServiceL = userService;
    }
    LoginComponent.prototype.onClickMe = function () {
        var _this = this;
        console.log(this.email);
        console.log(this.password);
        this.userServiceL.login(this.email, this.password).subscribe(function (token) {
            _this.token = token['token'];
            alert(_this.token);
        }, function (error) {
            _this.errorMessage = error;
        });
        return false;
    };
    LoginComponent.prototype.onKeyEmail = function (value) {
        this.email = value;
    };
    LoginComponent.prototype.onKeyPass = function (value) {
        this.password = value;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        providers: [user_service_1.UserService, globals_1.Globals],
        templateUrl: './login.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, globals_1.Globals])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map