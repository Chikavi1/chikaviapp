import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ToastController } from 'ionic-angular';
import { OBJETOS } from '../../data/data.objetos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	objetos:any[] = [];
texto = "resultado";
items: any;
  constructor(public navCtrl: NavController,
		  	private barcodeScanner: BarcodeScanner,
		  	private toastCtrl: ToastController) {
  	this.objetos = OBJETOS.slice(0);
  	 this.initializeItems();
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
}