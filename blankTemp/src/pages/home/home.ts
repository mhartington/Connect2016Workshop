import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail-page/detail-page';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public items = [1, 2, 3]
  constructor(public navCtrl: NavController) {

  }

  pushPage(item) {
    this.navCtrl.push(DetailPage, {
      'data': item
    });
  }
  remove(item) {
    let index = this.items.indexOf(item);
    if (index != -1) { this.items.splice(index, 1); }
  }

}
