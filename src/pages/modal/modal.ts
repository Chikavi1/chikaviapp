import { Component } from '@angular/core';
import {  NavParams,ViewController } from 'ionic-angular';
import { PedidosProvider } from '../../providers/pedidos/pedidos';



@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

	inputValue1: string = "";
	inputValue2: string = "";
	numeroMesa;


  constructor(public  viewCtrl: ViewController , 
  			  public navParams: NavParams,
  			  public Pedidos:PedidosProvider) {
  	this.numeroMesa = this.navParams.get("numero_mesa");
  }

  cerrar_con_parametros(){

  	let data = {
  		folio: 123,
  		cantidad: this.inputValue1,
  		mesa: this.numeroMesa,
  		status: 0,
  		vendedor: "el kiosko",
  		nombre: this.inputValue2,
  		products_id: 1,
  		precio : 120
  	};

this.Pedidos.post(data).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });
  	this.viewCtrl.dismiss(data);
  }

  cerrar(){
  	this.viewCtrl.dismiss();
  }

}



