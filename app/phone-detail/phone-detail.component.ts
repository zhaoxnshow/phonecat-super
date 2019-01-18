// declare var angular: angular.IAngularStatic;
// import { downgradeComponent } from '@angular/upgrade/static';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Phone, PhoneData } from '../core/phone/phone.service';
import { PhoneUtil } from '../core/phone/phone.util';

// import { RouteParams } from '../ajs-upgraded-providers';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.template.html',
})

export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;

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
  constructor(activatedRoute: ActivatedRoute, phone: Phone, phoneUtil: PhoneUtil) {
    phone.get(activatedRoute.snapshot.paramMap.get('phoneId'))
      .subscribe((p: PhoneData) => {
        this.phone = phoneUtil.cvtDetailImgUrl(p);
        this.setImage(this.phone.images[0]);
      });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }

  // convertImgUrl(data: PhoneData) {
  //   for(let i = 0; i < data.images.length; i++){
  //     data.images[i] = 'app/'.concat(data.images[i]);
  //   }
  //   return data;
  // }
}

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
