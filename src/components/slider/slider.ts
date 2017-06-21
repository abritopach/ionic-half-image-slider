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

    @ViewChild('cdhandle')
    @ViewChild('cdimagecontainer')
    cdhandle: ElementRef;
    cdimagecontainer: ElementRef;
    flagDrag: boolean = false;
    flagResize: boolean = false;

    constructor() {
        console.log('Hello SliderComponent Component');
    }

    touchstart(event) {
        console.log("Touchstart");
        this.flagDrag = true;
        this.flagResize = true;


        console.log(this.cdhandle);

        let dragWidth = this.cdhandle.nativeElement.offsetWidth;
        console.log("dragWidth: " + dragWidth);

        console.log(event.touches[0].pageX);

        let xPosition = this.cdhandle.nativeElement.offsetLeft + dragWidth - event.touches[0].pageX;
        console.log("xPositiom: " + xPosition);

        console.log(this.cdimagecontainer);



        /*
            xPosition = dragElement.offset().left + dragWidth - e.pageX,
            containerOffset = container.offset().left,
            containerWidth = container.outerWidth(),
            minLeft = containerOffset + 10,
            maxLeft = containerOffset + containerWidth - dragWidth - 10;
            */

    }

    touchmove(event) {
        console.log("Touchmove");
    }

    touchend(event) {
        console.log("Touchend");
    }


}
