import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx'
/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PedidosProvider {

  constructor(public http: HttpClient) {
  }
datos;
baseUrl:string = "http://127.0.0.1:8000/api/";

  index(mesa):any{
  	return this.http.get(this.baseUrl+"ventasmesa?mesa="+mesa);
  }
  eliminarProducto(data):any{
 let datos = {
      "id": data
    }

    console.log(datos);

    return new Promise((resolve, reject) => {
    this.http.post(this.baseUrl+'ventas/delete', datos)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });

}

  post(data){

    
  // 	let data = {
  //   	"folio":"1234",
  //   	"cantidad":"3",
  //   	"vendedor":"luis rojas",
		// "nombre":"pizza",
		// "products_id":"3",
		// "precio":"220"}


  	return new Promise((resolve, reject) => {
    this.http.post(this.baseUrl+'createVenta', data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
  }


}
