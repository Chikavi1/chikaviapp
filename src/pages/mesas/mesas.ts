import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MESAS } from '../../data/mesas';
import { PedidosPage } from '../pedidos/pedidos';
/**
 * Generated class for the MesasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mesas',
  templateUrl: 'mesas.html',
})
export class MesasPage {

mesas:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.mesas = MESAS.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesasPage');
  }

  iraPedidos(mesa:any){
  	this.navCtrl.push(PedidosPage,{ 'mesa': mesa });
  }

}
