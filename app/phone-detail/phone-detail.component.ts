declare var angular: angular.IAngularStatic;
import { Phone, PhoneData } from '../core/phone/phone.service';

class PhoneDetailController {
  phone: PhoneData;
  mainImageUrl: string;

  static $inject = ['$routeParams', 'phone'];
  constructor($routeParams: angular.route.IRouteParamsService, phone: Phone) {
    let phoneId = $routeParams['phoneId'];
    phone.get(phoneId).subscribe(data => {
      this.phone = this.convertImgUrl(data);
      this.setImage(this.phone.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }

  convertImgUrl(data: PhoneData) {
    for(let i = 0; i < data.images.length; i++){
      data.images[i] = 'app/'.concat(data.images[i]);
    }
    return data;
  }
}

angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'app/phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
  });
