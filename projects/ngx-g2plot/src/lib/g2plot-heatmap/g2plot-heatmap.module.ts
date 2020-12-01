/*
 * @Description: 
 * @Date: 2020-11-30 18:11:58
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 10:42:09
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotHeatmapDirective } from './g2plot-heatmap.directive';

@NgModule({
  declarations: [G2plotHeatmapDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotHeatmapDirective]
})
export class G2plotHeatmapModule { }
