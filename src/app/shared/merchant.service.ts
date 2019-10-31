import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  merchantList: AngularFireList<any>;
  array = [];

  constructor(private firebase: AngularFireDatabase) {
    this.merchantList = this.firebase.list('merchants');
    this.merchantList.snapshotChanges().subscribe(
        list => {
          this.array = list.map(item => {
            return {
                $key: item.key,
                ...item.payload.val()
            };
          });
        });
    }

    getMerchantName($key) {
      if ($key === '0') {
        return '';
      } else {
        return _.find(this.array, (obj) => obj.$key === $key)['name'];
      }

    }
}
