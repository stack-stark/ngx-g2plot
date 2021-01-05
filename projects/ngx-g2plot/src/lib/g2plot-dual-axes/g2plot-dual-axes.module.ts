/*
 * @Description:
 * @Date: 2020-12-01 17:26:04
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 17:26:46
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotDualAxesDirective } from './g2plot-dual-axes.directive';

@NgModule({
  declarations: [G2plotDualAxesDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotDualAxesDirective]
})
export class G2plotDualAxesModule { }
