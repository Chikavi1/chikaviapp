import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EstadisticasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EstadisticasProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EstadisticasProvider Provider');
  }

  baseUrl:string = "https://www.chikavi.com/api/";

  index():any{
  	return this.http.get(this.baseUrl+"estadisticas");
  }

}
