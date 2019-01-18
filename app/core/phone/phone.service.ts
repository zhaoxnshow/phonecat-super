// 'use strict';

// angular.
//   module('core.phone').
//   factory('Phone', ['$resource',
//     function($resource: angular.resource.IResourceService) {
//       return $resource('app/phones/:phoneId.json', {}, {
//         query: {
//           method: 'GET',
//           params: {phoneId: 'phones'},
//           isArray: true
//         }
//       });
//     }
//   ]);

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

declare var angular: angular.IAngularStatic;
import { downgradeInjectable } from '@angular/upgrade/static';

export interface PhoneData {
  name: string;
  snippet: string;
  images: string[];
}

@Injectable()
export class Phone {
  constructor(private http: Http) { }
  query(): Observable<PhoneData[]> {
    // return this.http.get(`phones/phones.json`).pipe(
    //   map((res: Response) => res.json())
    // );
     return this.http.get(`app/phones/phones.json`).map((res: Response) => res.json());
  }
  get(id: string): Observable<PhoneData> {
    // return this.http.get(`phones/${id}.json`).pipe(
    //   map((res: Response) => res.json())
    // );
     return this.http.get(`app/phones/${id}.json`).map((res: Response) => res.json());
  }
}

angular.module('core.phone')
  .factory('phone', downgradeInjectable(Phone));
