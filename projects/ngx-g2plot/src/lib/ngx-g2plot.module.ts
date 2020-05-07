import { NgModule } from '@angular/core';
import {
  G2plotPieDirective,
  G2plotLineDirective,
  G2plotGaugeDirective,
  G2plotColumnDirective,
  G2plotBarDirective,
  G2plotAreaDirective
} from './index';
import { G2plotStepLineDirective } from './g2plot-StepLine/g2plot-step-line.directive';
import { G2plotStackedAreaDirective } from './g2plot-StackedArea/g2plot-stacked-area.directive';
import { G2plotStackedColumnDirective } from './g2plot-StackedColumn/g2plot-stacked-column.directive';
import { G2plotGroupedColumnDirective } from './g2plot-GroupedColumn/g2plot-grouped-column.directive';
import { G2plotRangeColumnDirective } from './g2plot-RangeColumn/g2plot-range-column.directive';


@NgModule({
  declarations: [
    G2plotPieDirective,
    G2plotLineDirective,
    G2plotGaugeDirective,
    G2plotColumnDirective,
    G2plotBarDirective,
    G2plotAreaDirective,
    G2plotStepLineDirective,
    G2plotStackedAreaDirective,
    G2plotStackedColumnDirective,
    G2plotGroupedColumnDirective,
    G2plotRangeColumnDirective
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
