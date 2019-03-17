import { Component,ViewChild } from '@angular/core';
import {  NavParams,ViewController } from 'ionic-angular';
import { PedidosProvider } from '../../providers/pedidos/pedidos';
import { ToastController } from 'ionic-angular';
import { SelectSearchableComponent } from 'ionic-select-searchable';
import { ProductsProvider } from '../../providers/products/products';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
 @ViewChild('myselect') selectComponent: SelectSearchableComponent; 

	inputValue1: number = 0;
	numeroMesa;
  data = [];
  seleccion; 

  constructor(public  viewCtrl: ViewController , 
  			  public navParams: NavParams,
  			  public Pedidos:PedidosProvider,
          private toastCtrl: ToastController,
           public products: ProductsProvider ) {
  	this.numeroMesa = this.navParams.get("numero_mesa");

    this.products.index().subscribe(
       (data) => { this.data = data },
       (error) =>{console.log(error)}
       );
    
  }


  userChanged(event: { component: SelectSearchableComponent},value:any){
    this.seleccion = event;
    console.log(this.seleccion);
  }

  onclose(){
    let toast = this.toastCtrl.create({
      message: 'thanks for you selection',
      duration: 2000
    });
    toast.present();
  }


  openFromCode(){
    this.selectComponent.open();
  }






  cerrar_con_parametros(){

  	let data = {
  		folio: this.numeroMesa,
  		cantidad: this.inputValue1,
  		mesa: this.numeroMesa,
  		status: 0,
  		vendedor: "el kiosko",
  		nombre: this.seleccion.value.nombre,
  		products_id: 1,
  		precio : (this.seleccion.value.precio * this.inputValue1)
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



