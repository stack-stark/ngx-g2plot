/*
 * @Description:
 * @Date: 2020-12-01 10:47:40
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 11:12:37
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotWaterfallDirective } from './g2plot-waterfall.directive';


@NgModule({
  declarations: [G2plotWaterfallDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotWaterfallDirective]
})
export class G2plotWaterfallModule { }
