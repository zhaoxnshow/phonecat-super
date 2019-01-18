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
// declare var angular: angular.IAngularStatic;
// import { downgradeComponent } from '@angular/upgrade/static';
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var phone_service_1 = require("../core/phone/phone.service");
var phone_util_1 = require("../core/phone/phone.util");
// import { RouteParams } from '../ajs-upgraded-providers';
var PhoneDetailComponent = (function () {
    // // static $inject = ['$routeParams', 'phone'];
    // constructor(routeParams: RouteParams, phone: Phone) {
    //   // let phoneId = $routeParams['phoneId'];
    //   // phone.get(phoneId).subscribe(data => {
    //   //   this.phone = this.convertImgUrl(data);
    //   //   this.setImage(this.phone.images[0]);
    //   // });
    //   phone.get(routeParams['phoneId']).subscribe(phone => {
    //     this.phone = this.convertImgUrl(phone);;
    //     this.setImage(this.phone.images[0]);
    //   });
    // }
    function PhoneDetailComponent(activatedRoute, phone, phoneUtil) {
        var _this = this;
        phone.get(activatedRoute.snapshot.paramMap.get('phoneId'))
            .subscribe(function (p) {
            _this.phone = phoneUtil.cvtDetailImgUrl(p);
            _this.setImage(_this.phone.images[0]);
        });
    }
    PhoneDetailComponent.prototype.setImage = function (imageUrl) {
        this.mainImageUrl = imageUrl;
    };
    return PhoneDetailComponent;
}());
PhoneDetailComponent = __decorate([
    core_1.Component({
        selector: 'phone-detail',
        templateUrl: './phone-detail.template.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, phone_service_1.Phone, phone_util_1.PhoneUtil])
], PhoneDetailComponent);
exports.PhoneDetailComponent = PhoneDetailComponent;
// angular.
//   module('phoneDetail').
//   component('phoneDetail', {
//     templateUrl: 'app/phone-detail/phone-detail.template.html',
//     controller: PhoneDetailController
//   });
// angular.module('phoneDetail')
//   .directive(
//     'phoneDetail',
//     downgradeComponent({component: PhoneDetailComponent}) as angular.IDirectiveFactory
//   );
//# sourceMappingURL=phone-detail.component.js.map