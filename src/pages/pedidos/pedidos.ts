import { Component } from '@angular/core';
import {  NavController, NavParams, ModalController } from 'ionic-angular';
import { PedidosProvider } from '../../providers/pedidos/pedidos';
import { ModalPage } from '../modal/modal';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the PedidosPage page.
 *	
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {
	pedidos :any[];
  mesa:any = {};
  nmesa;
  data;

 
  constructor(public navCtrl: NavController,
             public navParams: NavParams,
             public Pedidos:PedidosProvider,
             private modalCtrl: ModalController,
             public alertCtrl: AlertController) {
    this.mesa = this.navParams.get("mesa");
    this.nmesa = this.mesa.id;
    console.log(this.nmesa);
    this.data = {
      "folio":"1234",
      "cantidad":"3",
      "mesa": this.nmesa,
      "status": 0,
      "vendedor":"luis rojas",
      "nombre":"pizza",
      "products_id":1,
      "precio":"220"
  }
  console.log(this.data);


   	 this.Pedidos.index(this.nmesa).subscribe(
      (data) => {this.pedidos = data},
       (error) =>{console.log(error)}
       );

  }

alerta() {
  let alert = this.alertCtrl.create({
    title: '¿Estas seguro?',
    message: 'Al aceptar,se eliminaran todos los pedidos de la mesa',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('jaja culio el vato xd');
        }
      },
      {
        text: 'Aceptar',
        handler: () => {
          console.log('Acepto elimnar todo alv');
        }
      }
    ]
  });
  alert.present();
}

  ionViewDidLoad() {
     this.Pedidos.index(this.nmesa).subscribe(
      (data) => {this.pedidos = data},
       (error) =>{console.log(error)}
       );
  }
borrarProducto(producto:any,idx:number){
  this.pedidos.splice(idx,1);
  this.Pedidos.eliminarProducto(producto.id);
}
 
mostrar_modal(){
  let modal = this.modalCtrl.create(ModalPage,{ "numero_mesa" : this.nmesa });
  modal.present();
  modal.onDidDismiss( parametros => {
    console.log("datos del modal");
    console.log(parametros);
  })
}

 generarPedido() {
    this.Pedidos.post(this.data).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });
}

doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.Pedidos.index(this.nmesa).subscribe(
      (data) => {this.pedidos = data},
      (error) => {}
      //console.log(data)
      
      );
            refresher.complete();
    }, 2000);
  }

}
