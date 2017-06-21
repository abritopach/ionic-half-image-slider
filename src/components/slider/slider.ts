import { Component } from '@angular/core';

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

    flagDrag: boolean = false;
    flagResize: boolean = false;

    constructor() {
        console.log('Hello SliderComponent Component');
    }

    touchstart(event) {
        console.log("Touchstart");
        this.flagDrag = true;
        this.flagResize = true;
    }

    touchmove(event) {
        console.log("Touchmove");
    }

    touchend(event) {
        console.log("Touchend");
    }


}
