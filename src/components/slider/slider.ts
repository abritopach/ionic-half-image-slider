import { Component, ViewChild, ElementRef, Input } from '@angular/core';

/**
 * Generated class for the SliderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
    selector: 'slider',
    templateUrl: 'slider.html',
    host: {
        '(window:resize)': 'onResize($event)'
    }
})

export class SliderComponent {

    image1Src: string;
    image2Src: string;
    label1Text: string;
    label2Text: string;
    logo1Src: string;
    logo2Src: string;

    @Input()
    set image1(image1: string) {
        this.image1Src = image1;
    }

    @Input()
    set image2(image2: string) {
        this.image2Src = image2;
    }

    @Input()
    set label1(label1: string) {
        this.label1Text = label1;
    }

    @Input()
    set label2(label2: string) {
        this.label2Text = label2;
    }

    @Input()
    set logo1(logo1: string) {
        this.logo1Src = logo1;
    }

    @Input()
    set logo2(logo2: string) {
        this.logo2Src = logo2;
    }


    @ViewChild('slider') slider: ElementRef;
    @ViewChild('cdhandle') cdhandle: ElementRef;
    @ViewChild('cdresize') cdresize: ElementRef;
    @ViewChild('image1Span') image1Span: ElementRef;
    @ViewChild('image2Span') image2Span: ElementRef;
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
    visibility1: string = "visible";
    visibility2: string = "visible";

    constructor() {
        console.log('Hello SliderComponent Component');
    }

    mousedown(event) {
        this.flagDrag = true;
        this.flagResize = true;

        this.dragWidth = this.cdhandle.nativeElement.offsetWidth;
        this.xPosition = this.cdhandle.nativeElement.offsetLeft + this.dragWidth - event.pageX;
        this.containerOffset = this.slider.nativeElement.offsetLeft;
        this.containerWidth = this.slider.nativeElement.offsetWidth;

        this.minLeft = this.containerOffset + 10;
        this.maxLeft = this.containerOffset + this.containerWidth - this.dragWidth - 10;
    }

    mousemove(event) {
        event.preventDefault();

        if (this.flagDrag) {
            this.leftValue = event.pageX + this.xPosition - this.dragWidth;

            // Constrain the draggable element to move inside his container.
            if (this.leftValue < this.minLeft) {
                this.leftValue = this.minLeft;
            } else if ( this.leftValue > this.maxLeft) {
                this.leftValue = this.maxLeft;
            }

            this.widthValue = (this.leftValue + this.dragWidth/2 - this.containerOffset) * 100/this.containerWidth + '%';

            // Update labels.
            this.updateLabel(this.image2Span, this.cdresize, 'left');
            this.updateLabel(this.image1Span, this.cdresize, 'right');
        }
    }

    mouseup(event) {
        this.flagDrag = false;
        this.flagResize = false;
    }

    touchstart(event) {
        this.flagDrag = true;
        this.flagResize = true;

        this.dragWidth = this.cdhandle.nativeElement.offsetWidth;
        this.xPosition = this.cdhandle.nativeElement.offsetLeft + this.dragWidth - event.touches[0].pageX;
        this.containerOffset = this.slider.nativeElement.offsetLeft;
        this.containerWidth = this.slider.nativeElement.offsetWidth;

        this.minLeft = this.containerOffset + 10;
        this.maxLeft = this.containerOffset + this.containerWidth - this.dragWidth - 10;
    }

    touchmove(event) {
        this.leftValue = event.touches[0].pageX + this.xPosition - this.dragWidth;

        // Constrain the draggable element to move inside his container.
        if (this.leftValue < this.minLeft) {
            this.leftValue = this.minLeft;
        } else if ( this.leftValue > this.maxLeft) {
            this.leftValue = this.maxLeft;
        }

        this.widthValue = (this.leftValue + this.dragWidth/2 - this.containerOffset) * 100/this.containerWidth + '%';

        // Update labels.
        this.updateLabel(this.image2Span, this.cdresize, 'left');
        this.updateLabel(this.image1Span, this.cdresize, 'right');

    }

    touchend(event) {
        this.flagDrag = false;
        this.flagResize = false;
    }

    updateLabel(label, resizeElement, position) {
        if(position == 'left') {
            if (label.nativeElement.offsetLeft + label.nativeElement.offsetWidth < resizeElement.nativeElement.offsetLeft + resizeElement.nativeElement.offsetWidth) {
                this.visibility2 = "visible";
            }
            else {
                this.visibility2 = "hidden";
            }
        }
        else {
            if (label.nativeElement.offsetLeft > resizeElement.nativeElement.offsetLeft + resizeElement.nativeElement.offsetWidth) {
                this.visibility1 = "visible";
            }
            else {
                this.visibility1 = "hidden";
            }
        }
    }

    onResize(event) {
        this.updateLabel(this.image2Span, this.cdresize, 'left');
        this.updateLabel(this.image1Span, this.cdresize, 'right');
    }

}
