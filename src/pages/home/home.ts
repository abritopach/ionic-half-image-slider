import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  originalImage: string = "assets/images/background6.jpg";
  modifiedImage: string = "assets/images/background5.jpg";

  constructor(public navCtrl: NavController) {

  }

}
