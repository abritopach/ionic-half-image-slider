import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    image1: string = "";
    image2: string = "";
    label1: string = "";
    label2: string = "";
    logo1: string = "";
    logo2: string = "";

    slides: any;
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
        this.image1 = this.slides[this.currentSliderIndex].image1;
        this.image2 = this.slides[this.currentSliderIndex].image2
        this.label1 = this.slides[this.currentSliderIndex].label1;
        this.label2 = this.slides[this.currentSliderIndex].label2;
        this.logo1 = this.slides[this.currentSliderIndex].logo1;
        this.logo2 = this.slides[this.currentSliderIndex].logo2;
        this.currentSliderIndex += 1;
    }

}
