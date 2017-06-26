import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    slides: any;
    currentImages: any;
    currentSliderIndex: number = 0;

    constructor(public navCtrl: NavController) {
        this.slides = [
            {
                image1: 'assets/images/background6.jpg',
                image2: 'assets/images/background5.jpg',
                label1: 'Summer',
                label2: 'Winter',
                logo1: '',
                logo2: ''
            },
            {
                image1: 'assets/images/background4.jpg',
                image2: 'assets/images/background3.jpg',
                label1: 'Side',
                label2: 'Front',
                logo1: '',
                logo2: ''
            },
            {
                image1: 'assets/images/background2.jpg',
                image2: 'assets/images/background1.jpg',
                label1: '',
                label2: 'Standard Lens',
                logo1: 'assets/images/logo.png',
                logo2: ''
            }
        ]
        this.getNextImages();
    }

    getNextImages() {
        //console.log(this.currentSliderIndex);
        if (this.currentSliderIndex > this.slides.length - 1) this.currentSliderIndex = 0;
        this.currentImages = this.slides[this.currentSliderIndex];
        this.currentSliderIndex += 1;
    }

}
