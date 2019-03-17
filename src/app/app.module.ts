import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PedidosPage } from '../pages/pedidos/pedidos'
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { EstadisticasPage } from '../pages/estadisticas/estadisticas';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductPage } from '../pages/product/product';
import { HomeProvider } from '../providers/home/home';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { PedidosProvider } from '../providers/pedidos/pedidos';
import { EstadisticasProvider } from '../providers/estadisticas/estadisticas';
import { MesasPage} from '../pages/mesas/mesas';
import { ModalPage} from '../pages/modal/modal';
import { TicketPage} from '../pages/ticket/ticket';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { ProductsProvider } from '../providers/products/products';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    EstadisticasPage,
    PedidosPage,
    MesasPage,
    ModalPage,
    TicketPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ChartsModule,
    SelectSearchableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    EstadisticasPage,
    PedidosPage,
    MesasPage,
    ModalPage,
    TicketPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HomeProvider,
    PedidosProvider,
    EstadisticasProvider,
    ProductsProvider
  ]
})
export class AppModule {}
