/*
 * @Description: 
 * @Date: 2020-05-13 12:28:34
 * @LastEditors: tanmh
 * @LastEditTime: 2020-11-30 18:09:00
 */
import { NgModule } from '@angular/core';
import {
  G2plotPieDirective,
  G2plotLineDirective,
  G2plotGaugeDirective,
  G2plotColumnDirective,
  G2plotBarDirective,
  G2plotAreaDirective,
  G2plotWaterfallDirective,
  G2plotRoseDirective,
  G2plotScatterDirective,
  G2plotHeatmapDirective,
  G2plotBulletDirective,
  G2plotLiquidDirective,
  G2plotWordCloudDirective,
  G2plotHistogramDirective,
  G2plotRadarDirective
} from './index';

@NgModule({
  declarations: [
    G2plotPieDirective,
    G2plotLineDirective,
    G2plotGaugeDirective,
    G2plotColumnDirective,
    G2plotBarDirective,
    G2plotAreaDirective,
    G2plotWaterfallDirective,
    G2plotRoseDirective,
    G2plotScatterDirective,
    G2plotHeatmapDirective,
    G2plotBulletDirective,
    G2plotLiquidDirective,
    G2plotWordCloudDirective,
    G2plotHistogramDirective,
    G2plotRadarDirective
  ],
  imports: [
  ],
  exports: [
    G2plotPieDirective,
    G2plotLineDirective,
    G2plotGaugeDirective,
    G2plotColumnDirective,
    G2plotBarDirective,
    G2plotAreaDirective,
    G2plotWaterfallDirective,
    G2plotRoseDirective,
    G2plotScatterDirective,
    G2plotHeatmapDirective,
    G2plotBulletDirective,
    G2plotLiquidDirective,
    G2plotWordCloudDirective,
    G2plotHistogramDirective,
    G2plotRadarDirective
  ]
})
export class NgxG2plotModule { }
