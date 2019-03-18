import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx'
/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {

  constructor(public http: HttpClient) {
  }


  baseUrl:string = "https://www.chikavi.com/api/";

  index():any{
  	return this.http.get(this.baseUrl+"categories");
  }
 
}
