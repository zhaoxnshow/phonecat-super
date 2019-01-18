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
var PhoneUtil = (function () {
    function PhoneUtil() {
    }
    PhoneUtil.prototype.cvtDetailImgUrl = function (phoneDatas) {
        for (var i = 0; i < phoneDatas.images.length; i++) {
            phoneDatas.images[i] = 'app/'.concat(phoneDatas.images[i]);
        }
        return phoneDatas;
    };
    PhoneUtil.prototype.cvtListImgUrl = function (phoneDatas) {
        for (var i = 0; i < phoneDatas.length; i++) {
            phoneDatas[i].imageUrl = 'app/'.concat(phoneDatas[i].imageUrl);
        }
        return phoneDatas;
    };
    return PhoneUtil;
}());
PhoneUtil = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], PhoneUtil);
exports.PhoneUtil = PhoneUtil;
//# sourceMappingURL=phone.util.js.map