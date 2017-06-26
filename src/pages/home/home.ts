import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  image1: string = "assets/images/background6.jpg";
  image2: string = "assets/images/background5.jpg";

  constructor(public navCtrl: NavController) {

  }

}
