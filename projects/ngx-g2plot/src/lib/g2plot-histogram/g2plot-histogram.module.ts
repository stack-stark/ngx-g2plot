/*
 * @Description:
 * @Date: 2020-11-30 18:12:15
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 10:43:58
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotHistogramDirective } from './g2plot-histogram.directive';

@NgModule({
  declarations: [G2plotHistogramDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotHistogramDirective]
})
export class G2plotHistogramModule { }
