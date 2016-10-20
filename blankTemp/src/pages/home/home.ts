import { Component } from '@angular/core';
import { DataService } from '../../providers/data-service';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail-page/detail-page';
import _ from 'lodash';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public items: Array<any>;
  constructor(
    public navCtrl: NavController,
    public data: DataService
  ) {
    this.data.getData().subscribe(
      res => this.items = res.results,
      err => console.log('err', err),
      () => console.log('done')

    );

  }

  pushPage(item) {
    this.navCtrl.push(DetailPage, {
      'data': item
    });
  }

  remove(item) {
    this.items = _.without(this.items, item);
  }

  fetchMore(event) {
    this.data.getData().subscribe(
      res => this.items = this.items.concat(res.results),
      err => console.log('err', err),
      () => event.complete()
    );
  }
}
