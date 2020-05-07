import { NgModule } from '@angular/core';
import {
  G2plotPieDirective,
  G2plotLineDirective,
  G2plotGaugeDirective,
  G2plotColumnDirective,
  G2plotBarDirective,
  G2plotAreaDirective
} from './index';


@NgModule({
  declarations: [
    G2plotPieDirective,
    G2plotLineDirective,
    G2plotGaugeDirective,
    G2plotColumnDirective,
    G2plotBarDirective,
    G2plotAreaDirective
  ],
  imports: [
  ],
  exports: [
    G2plotPieDirective,
    G2plotLineDirective,
    G2plotGaugeDirective,
    G2plotColumnDirective,
    G2plotBarDirective,
    G2plotAreaDirective
  ]
})
export class NgxG2plotModule { }
