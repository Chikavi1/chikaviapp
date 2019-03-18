import { Component } from '@angular/core';
import { NavController,ToastController,ModalController  } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { OBJETOS } from '../../data/data.objetos';

import { ProductPage } from '../product/product';
import { HomeProvider } from '../../providers/home/home';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  texto = "resultado";
  items: any;

  products :any[];


  constructor(public navCtrl: NavController,
		  	private barcodeScanner: BarcodeScanner,
		  	private toastCtrl: ToastController,
        public Home: HomeProvider,
        public alertCtrl: AlertController,
       public modalCtrl: ModalController){
  	//7this.objetos = OBJETOS.slice(0);
  	 //this.initializeItems();
     this.Home.index().subscribe(
       (data) => {this.products = data,console.log(data)},
       (error) =>{console.log(error)}
       );
  }



 initializeItems() {
    this.items = OBJETOS.slice(0);
  }

getItems(ev: string) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

goProfile(){
    const modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

mostrarError( mensaje : string ){
	 let toast = this.toastCtrl.create({
    message: mensaje
 ,   duration: 1500,
    position: 'bottom'
  });
	 toast.present();

}
navOptions = {
  animation: 'md-transition',
  duration: 1500
};
irPagina(item){
  this.navCtrl.push(ProductPage,{item :item},this.navOptions);
}

 showAlert(error) {
    const alert = this.alertCtrl.create({
      title: "tenemos un error",
      subTitle: error.message,
      buttons: ['Entendido']
    });
    alert.present();
  }


doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.Home.index().subscribe(
      (data) => {this.products = data},
      (error) => {this.showAlert(error)}
      //console.log(data)
      
      );
            refresher.complete();
    }, 2000);
  }

}