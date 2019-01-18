"use strict";
var PhoneListController = (function () {
    function PhoneListController(phone) {
        var _this = this;
        phone.query().subscribe(function (phones) {
            _this.phones = phones;
        });
        this.orderProp = 'age';
    }
    return PhoneListController;
}());
PhoneListController.$inject = ['phone'];
angular.
    module('phoneList').
    component('phoneList', {
    templateUrl: 'app/phone-list/phone-list.template.html',
    controller: PhoneListController
});
//# sourceMappingURL=phone-list.component.js.map