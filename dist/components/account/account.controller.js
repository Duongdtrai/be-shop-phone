"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountController = void 0;
const tsoa_1 = require("tsoa");
let AccountController = class AccountController extends tsoa_1.Controller {
    async checkLogin(data) {
        try {
            console.log(data);
            if (!data.username || !data.password) {
                this.setStatus(404);
                return "Fields were required";
            }
            if (data.password != "123456" || data.username != "admin") {
                this.setStatus(404);
                return "Username or password is incorrect";
            }
            this.setStatus(200);
            return "Login successfully";
        }
        catch (err) {
            this.setStatus(500);
            return `Service Error ${err} `;
        }
    }
};
__decorate([
    (0, tsoa_1.Post)('login'),
    __param(0, (0, tsoa_1.Body)())
], AccountController.prototype, "checkLogin", null);
AccountController = __decorate([
    (0, tsoa_1.Route)('account'),
    (0, tsoa_1.Tags)('Account')
], AccountController);
exports.AccountController = AccountController;
//# sourceMappingURL=account.controller.js.map