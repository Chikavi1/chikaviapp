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
baseUrl:string = "https://www.chikavi.com/api/";

  index(mesa):any{
  	return this.http.get(this.baseUrl+"ventasmesa?mesa="+mesa);
  }

  statusMesa(folio):any{
  return this.http.get(this.baseUrl+"updateStatus?folio="+folio);
}

  eliminarProducto(data):any{
 let datos = {
      "id": data
    }




    return new Promise((resolve, reject) => {
    this.http.get(this.baseUrl+'ventas/delete?id='+data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });

}

eliminarTodo(folio){
  console.log("eliminado.....");
  return this.http.get(this.baseUrl+"deleteAll?folio="+1 );
  }

  post(data){

    let folio = data.folio;
    let cantidad = data.cantidad;
    let vendedor = data.vendedor;
    let nombre = data.nombre;
    let products_id = data.products_id;
    let precio = data.precio;
    let mesa = data.mesa;
console.log(data);

  	return new Promise((resolve, reject) => {
    this.http.get(this.baseUrl+"createVenta?folio="+folio+"&cantidad="+cantidad+"&vendedor="+vendedor+"&nombre="+nombre+"&products_id="
      +products_id+"&precio="+precio+"&mesa="+mesa+"&status="+0)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
   });
  }




}
