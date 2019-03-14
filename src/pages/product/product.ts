import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';
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

	productos= [];
	numero = 0;
  name:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,private products: ProductsProvider) {
  	  	this.name = this.navParams.get("item");
        this.products.bycategory(this.name.nombre).subscribe(
       (data) => {this.productos = data},
       (error) =>{console.log(error)}
       );

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
