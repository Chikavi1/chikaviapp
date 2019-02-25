import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstadisticasProvider } from '../../providers/estadisticas/estadisticas';
/**
 * Generated class for the EstadisticasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estadisticas',
  templateUrl: 'estadisticas.html',
})
export class EstadisticasPage {
  datos :any[];
  pizza:any;
  cerveza;
  alitas;
  public doughnutChartData:number[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public Estadisticas: EstadisticasProvider) {
    this.Estadisticas.index().subscribe(
       (data) => {this.datos = data,
                 this.pizza = data[0].pizza,
                 this.cerveza = data[0].cerveza,
                 this.alitas = data[0].alitas,
                 this.doughnutChartData = [this.pizza, this.cerveza, this.alitas]; },
       (error) =>{console.log(error)}
       );

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EstadisticasPage');
  }

  public doughnutChartLabels:string[] = ['pizza', 'cervezas', 'alitas'];

public doughnutChartType:string = 'doughnut';

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}
doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.Estadisticas.index().subscribe(
      (data) => {this.datos = data,
                 this.pizza = data[0].pizza,
                 this.cerveza = data[0].cerveza,
                 this.alitas = data[0].alitas,
                 this.doughnutChartData = [this.pizza, this.cerveza, this.alitas];},
      (error) => {}
      //console.log(data)
      
      );
            refresher.complete();
    }, 2000);
  }
}
