import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {
baseUrl:string = "http://127.0.0.1:8000/api/";
  constructor(public http: HttpClient) {
  }
 index():any{
  	return this.http.get(this.baseUrl+"products");
  }
  bycategory(category):any{
  	return this.http.get(this.baseUrl+"productosCategoria?categoria="+category);
  }
}



