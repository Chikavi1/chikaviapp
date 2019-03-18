import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  ViewController } from 'ionic-angular';
import { MesasPage } from '../mesas/mesas';
/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {
	
  token:any;
  qrData = this.generateToken();
  createdCode = null;


  total;
  mesero = localStorage.getItem("nombreMesero");
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public  viewCtrl: ViewController) {
    this.createCode();
    this.total = this.navParams.get("total");
  }

 

  generateToken(){
  let random = Math.random().toString(10).substr(2)
  return this.token = random + random ; 

 }

  createCode(){
    this.createdCode = this.qrData;
  }



   ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }
cerrar(){
    this.viewCtrl.dismiss();
  }
  aceptar(){
   this.navCtrl.pop();
  }
}
