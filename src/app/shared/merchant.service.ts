import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

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
}
