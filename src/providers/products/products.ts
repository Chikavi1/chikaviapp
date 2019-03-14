import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {
baseUrl:string = "https://www.chikavi.com/api/";
  constructor(public http: HttpClient) {
  }
 index():any{
  	return this.http.get(this.baseUrl+"products");
  }
}



