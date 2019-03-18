import { Component } from '@angular/core';
import {  NavController, NavParams, ModalController } from 'ionic-angular';
import { PedidosProvider } from '../../providers/pedidos/pedidos';
import { ModalPage } from '../modal/modal';
import { TicketPage } from '../ticket/ticket';
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
	pedidos = [];
  mesa:any = {};
  nmesa;
  data;
  folio;
  total:number;
  constructor(public navCtrl: NavController,
             public navParams: NavParams,
             public Pedidos:PedidosProvider,
             private modalCtrl: ModalController,
             public alertCtrl: AlertController) {
    this.mesa = this.navParams.get("mesa");
    this.nmesa = this.mesa.id;
    this.folio = this.nmesa;
    console.log("el folio es",this.folio);

   	 this.Pedidos.index(this.nmesa).subscribe(
      (data) => {
        this.pedidos = data;
        let suma = 0;
       for(let pedido of this.pedidos){
         if(pedido.status === 0){
           suma += Number(pedido.precio);
         }
        } 
        this.total = suma;
      },
       (error) =>{console.log(error)}
       );

   


  }
 

alerta() {
  let alert = this.alertCtrl.create({
    title: '¿Estas seguro?',
    message: 'Al aceptar,se da por finalizado la venta de la mesa.',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
        }
      },
      {
        text: 'Aceptar',
        handler: () => {
          this.Pedidos.statusMesa(this.nmesa).subscribe(
            (data) => {console.log("se supone debe funcionar")},
            (error)=> {console.log("valio verga")});
         this.mostrar_ticket();
        }
      }
    ]
  });
  alert.present();
}
borrarTodo(mesa){
  
  console.log("el folio a borrar ahorita es ",mesa);
}




borrarProducto(producto:any,idx:number){
  this.pedidos.splice(idx,1);
  this.Pedidos.eliminarProducto(producto.id);
}


mostrar_ticket(){
 let modal = this.modalCtrl.create(TicketPage,{ "total" : this.total });
  modal.present();
  
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
      (data) => {
        this.pedidos = data;
        let suma = 0;
       for(let pedido of this.pedidos){
         suma += Number(pedido.precio);
        } 
        this.total = suma;
      },
       (error) =>{console.log(error)}
       );
            refresher.complete();
    }, 2000);
  }

}
