import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

	pelicula:any = {};
	numero = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	  	this.pelicula = this.navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  aumentar(){
  	this.numero+1;
  }

  disminuir(){
  	this.numero-1;
  }

}
