/*
 * @Description:
 * @Date: 2020-12-01 10:46:29
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 10:58:09
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotPieDirective } from './g2plot-pie.directive';

@NgModule({
  declarations: [G2plotPieDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotPieDirective]
})
export class G2plotPieModule { }
