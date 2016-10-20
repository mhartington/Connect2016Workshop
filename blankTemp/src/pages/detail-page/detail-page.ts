import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail-page',
  templateUrl: 'detail-page.html'
})
export class DetailPage {
  public item = this.navParams.get('data');
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
      

    }

  ionViewDidLoad() {
    console.log('Hello DetailPage Page');
  }


}
