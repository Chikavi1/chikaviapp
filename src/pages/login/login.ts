import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email = ""
  password = "";
  islogin = false;

  emailmesero = localStorage.getItem("email");

  nombre = localStorage.getItem("nombreMesero");

  telefono = localStorage.getItem("telefono");

  constructor(public navCtrl: NavController, public navParams: NavParams,public  viewCtrl: ViewController,public alertCtrl: AlertController) {
    if(localStorage.getItem("email")){
        this.islogin = true;
    }
  }

  login(){
    if(
      this.email == "chikavi@hotmail.com" && this.password == "123456" ||
      this.email == "diana@hotmail.com" && this.password == "diana123" ||
      this.email == "jairo@hotmail.com" && this.password == "jairo123" ||
      this.email == "samir@hotmail.com" && this.password == "samir123" ||
      this.email == "samir@gmail.com" && this.password == "samir123"
      )
    {
         if(this.email == "chikavi@hotmail.com" ){
        localStorage.setItem("nombreMesero","Luis Rojas");
       localStorage.setItem("telefono","3317223923");

      } if(this.email == "diana@hotmail.com"){
        localStorage.setItem("nombreMesero","diana Fernandez");
       localStorage.setItem("telefono",  "3334991639");
      } if(this.email == "jairo@hotmail.com"){
        localStorage.setItem("nombreMesero","Jairo Ruelas");
        localStorage.setItem("telefono","3337218205");
      } if(this.email =="samir@hotmail.com"){
        localStorage.setItem("nombreMesero","samir de la torre");
       localStorage.setItem("telefono",  "333333333");
      } if(this.email == "samir@gmail.com"){
        localStorage.setItem("nombreMesero","samir de la torre");
       localStorage.setItem("telefono",  "333333333");
      }

      console.log("estas logeado");
      this.navCtrl.pop();


      localStorage.setItem("email", this.email);
      localStorage.setItem("password",this.password);

   



    }else{
      console.log("credenciales malas");
      this.alerta();
    }
  }


  logout(){
    localStorage.removeItem("email");
    localStorage.removeItem("password");
     localStorage.removeItem("nombreMesero");
     localStorage.removeItem("telefono");
    this.navCtrl.pop();
  }
  cerrar(){
  	this.viewCtrl.dismiss();
  }



alerta() {
  let alert = this.alertCtrl.create({
    title: 'Lo sentimos',
    message: 'No haz ingresando una cuenta valida,por favor vuelve a intentarlo.',
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



}
