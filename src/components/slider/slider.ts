import { Component, ViewChild, ElementRef } from '@angular/core';

/**
 * Generated class for the SliderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
    selector: 'slider',
    templateUrl: 'slider.html'
})

export class SliderComponent {

    @ViewChild('slider') slider: ElementRef;
    @ViewChild('cdhandle') cdhandle: ElementRef;
    flagDrag: boolean = false;
    flagResize: boolean = false;
    dragWidth: number;
    xPosition: number;
    containerOffset: number;
    containerWidth: number;
    minLeft: number;
    maxLeft: number;
    leftValue: number;
    widthValue: string;

    constructor() {
        console.log('Hello SliderComponent Component');
    }

    touchstart(event) {
        console.log("Touchstart");
        this.flagDrag = true;
        this.flagResize = true;


        console.log(this.cdhandle);

        this.dragWidth = this.cdhandle.nativeElement.offsetWidth;
        console.log("dragWidth: " + this.dragWidth);

        console.log(event.touches[0].pageX);

        this.xPosition = this.cdhandle.nativeElement.offsetLeft + this.dragWidth - event.touches[0].pageX;
        console.log("xPositiom: " + this.xPosition);

        console.log(this.slider);

        this.containerOffset = this.slider.nativeElement.offsetLeft;
        console.log("containerOffset: " + this.containerOffset);

        this.containerWidth = this.slider.nativeElement.offsetWidth;
        console.log("containerWidth: " + this.containerWidth);

        this.minLeft = this.containerOffset + 10;
        console.log("minLeft: " + this.minLeft);
        this.maxLeft = this.containerOffset + this.containerWidth - this.dragWidth - 10;
        console.log("maxLeft: " + this.maxLeft);
    }

    touchmove(event) {
        console.log("Touchmove");

        this.leftValue = event.touches[0].pageX + this.xPosition - this.dragWidth;
        console.log("leftValue: " + this.leftValue);

        // Constrain the draggable element to move inside his container.
        if (this.leftValue < this.minLeft) {
            this.leftValue = this.minLeft;
        } else if ( this.leftValue > this.maxLeft) {
            this.leftValue = this.maxLeft;
        }

        this.widthValue = (this.leftValue + this.dragWidth/2 - this.containerOffset) * 100/this.containerWidth + '%';
        console.log("widthValue: " + this.widthValue);


    }

    touchend(event) {
        console.log("Touchend");
        this.flagDrag = false;
        this.flagResize = false;
    }


}
