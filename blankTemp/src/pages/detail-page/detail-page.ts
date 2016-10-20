import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';
@Component({
  selector: 'page-detail-page',
  templateUrl: 'detail-page.html'
})
export class DetailPage {
  public item = this.navParams.get('data');
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  takePhoto() {
    Camera.getPicture()
      .then((res) => {
        this.item.picture.medium = res
      })
  }
  ionViewDidLoad() {
    console.log('Hello DetailPage Page');
  }


}
