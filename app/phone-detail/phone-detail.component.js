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
var static_1 = require("@angular/upgrade/static");
var core_1 = require("@angular/core");
var phone_service_1 = require("../core/phone/phone.service");
var ajs_upgraded_providers_1 = require("../ajs-upgraded-providers");
var PhoneDetailComponent = (function () {
    // static $inject = ['$routeParams', 'phone'];
    function PhoneDetailComponent(routeParams, phone) {
        var _this = this;
        // let phoneId = $routeParams['phoneId'];
        // phone.get(phoneId).subscribe(data => {
        //   this.phone = this.convertImgUrl(data);
        //   this.setImage(this.phone.images[0]);
        // });
        phone.get(routeParams['phoneId']).subscribe(function (phone) {
            _this.phone = _this.convertImgUrl(phone);
            ;
            _this.setImage(_this.phone.images[0]);
        });
    }
    PhoneDetailComponent.prototype.setImage = function (imageUrl) {
        this.mainImageUrl = imageUrl;
    };
    PhoneDetailComponent.prototype.convertImgUrl = function (data) {
        for (var i = 0; i < data.images.length; i++) {
            data.images[i] = 'app/'.concat(data.images[i]);
        }
        return data;
    };
    return PhoneDetailComponent;
}());
PhoneDetailComponent = __decorate([
    core_1.Component({
        selector: 'phone-detail',
        templateUrl: './phone-detail.template.html',
    }),
    __metadata("design:paramtypes", [ajs_upgraded_providers_1.RouteParams, phone_service_1.Phone])
], PhoneDetailComponent);
exports.PhoneDetailComponent = PhoneDetailComponent;
// angular.
//   module('phoneDetail').
//   component('phoneDetail', {
//     templateUrl: 'app/phone-detail/phone-detail.template.html',
//     controller: PhoneDetailController
//   });
angular.module('phoneDetail')
    .directive('phoneDetail', static_1.downgradeComponent({ component: PhoneDetailComponent }));
//# sourceMappingURL=phone-detail.component.js.map