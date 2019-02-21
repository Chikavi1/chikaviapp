import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { EstadisticasPage } from '../pages/estadisticas/estadisticas';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductPage } from '../pages/product/product';
import { HomeProvider } from '../providers/home/home';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    EstadisticasPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    EstadisticasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HomeProvider
  ]
})
export class AppModule {}
