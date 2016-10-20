import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail-page/detail-page';
import { DataService } from '../providers/data-service';
@NgModule({
  declarations: [ MyApp,HomePage, DetailPage],
  imports: [IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [ MyApp, HomePage, DetailPage],
  providers: [DataService]
})
export class AppModule {}
