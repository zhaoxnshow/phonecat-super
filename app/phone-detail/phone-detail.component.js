"use strict";
var PhoneDetailController = (function () {
    function PhoneDetailController($routeParams, phone) {
        var _this = this;
        var phoneId = $routeParams['phoneId'];
        phone.get(phoneId).subscribe(function (data) {
            _this.phone = _this.convertImgUrl(data);
            _this.setImage(_this.phone.images[0]);
        });
    }
    PhoneDetailController.prototype.setImage = function (imageUrl) {
        this.mainImageUrl = imageUrl;
    };
    PhoneDetailController.prototype.convertImgUrl = function (data) {
        for (var i = 0; i < data.images.length; i++) {
            data.images[i] = 'app/'.concat(data.images[i]);
        }
        return data;
    };
    return PhoneDetailController;
}());
PhoneDetailController.$inject = ['$routeParams', 'phone'];
angular.
    module('phoneDetail').
    component('phoneDetail', {
    templateUrl: 'app/phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
});
//# sourceMappingURL=phone-detail.component.js.map