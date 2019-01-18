
import { Injectable } from '@angular/core';

import { PhoneData } from './phone.service';

@Injectable()
export class PhoneUtil {
  constructor() { }
  cvtDetailImgUrl(phoneDatas: PhoneData): PhoneData {
    for(let i = 0; i < phoneDatas.images.length; i++){
      phoneDatas.images[i] = 'app/'.concat(phoneDatas.images[i]);
    }
    return phoneDatas;
  }
  cvtListImgUrl(phoneDatas: PhoneData[]): PhoneData[] {
    for(let i = 0; i < phoneDatas.length; i++){
      phoneDatas[i].imageUrl = 'app/'.concat(phoneDatas[i].imageUrl);
    }
    return phoneDatas;
  }
}