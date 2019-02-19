import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ToastController } from 'ionic-angular';
import { OBJETOS } from '../../data/data.objetos';

import { ProductPage } from '../product/product';
import { HomeProvider } from '../../providers/home/home';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  texto = "resultado";
  items: any;
  products :any[];
  peliculas :any[];


  constructor(public navCtrl: NavController,
		  	private barcodeScanner: BarcodeScanner,
		  	private toastCtrl: ToastController,
        public Home: HomeProvider,
        public alertCtrl: AlertController){
  	//7this.objetos = OBJETOS.slice(0);
  	 //this.initializeItems();
     this.Home.index().subscribe(
       (data) => {this.peliculas = data,console.log(data)},
       (error) =>{console.log(error)}
       );
  }

  scan(){
  	this.barcodeScanner.scan().then(barcodeData => {
  		this.mostrarError("Buscando...");
  		this.getItems(barcodeData.text);
	}).catch(err => {
	    console.log('Error', err);
	    this.mostrarError("Error: " + err)
	});
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

buscar(resultado:string){
	this.texto = resultado;
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
      (data) => {this.peliculas = data},
      (error) => {this.showAlert(error)}
      //console.log(data)
      
      );
            refresher.complete();
    }, 2000);
  }

}