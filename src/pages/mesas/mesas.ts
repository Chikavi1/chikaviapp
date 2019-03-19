import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { MESAS } from '../../data/mesas';
import { PedidosPage } from '../pedidos/pedidos';
import { LoginPage } from '../login/login';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  	this.mesas = MESAS.slice(0);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesasPage');
  }

  ionViewCanEnter(){
    if(localStorage.getItem("email")){
      return true;
    }else{
      this.alerta();
      return false;
    }
  }

alerta() {
  let alert = this.alertCtrl.create({
    title: 'inicia sesion',
    message: 'Debes Iniciar sesion para poder entrar aqui.',
    buttons: [
      {
        text: 'Aceptar',
        handler: () => {
         
        }
      }
    ]
  });
  alert.present();
}

  iraPedidos(mesa:any){
  	this.navCtrl.push(PedidosPage,{ 'mesa': mesa });
  }

}
