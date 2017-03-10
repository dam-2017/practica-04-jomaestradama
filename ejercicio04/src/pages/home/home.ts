//Integrantes>
//Jose Mar
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public resultado:string='';
  public n1:any;
  public n2:any;
  public nu1:number=0;
  public nu2:number=0;
  public simbolo:string='';

  constructor(public navCtrl: NavController) {
  }

  suma(){
    this.nu1=parseInt(this.n1);
    this.nu2=parseInt(this.n2);
    this.resultado = this.nu1+this.nu2+'';
    this.simbolo="+";
    console.log(this.resultado);
  }
  resta(){
    this.nu1=parseInt(this.n1);
    this.nu2=parseInt(this.n2);
    this.resultado= this.nu1- this.nu2+'';
    this.simbolo="-";
  }

  division(){
    this.nu1=parseInt(this.n1);
    this.nu2=parseInt(this.n2);
    this.resultado= this.n1/ this.n2+'';
    this.simbolo="/";
  }
  multiplicacion(){
    this.nu1=parseInt(this.n1);
    this.nu2=parseInt(this.n2);
    this.resultado= this.n1 * this.n2+'';
    this.simbolo="*";
  }

  modulo(){
    this.nu1=parseInt(this.n1);
    this.nu2=parseInt(this.n2);
    this.resultado= this.n1% this.n2+'';
    this.simbolo="%";
  }


}
