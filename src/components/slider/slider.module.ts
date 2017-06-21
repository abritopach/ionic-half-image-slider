import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SliderComponent } from './slider';

@NgModule({
  declarations: [
    SliderComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    SliderComponent
  ]
})
export class SliderComponentModule {}
