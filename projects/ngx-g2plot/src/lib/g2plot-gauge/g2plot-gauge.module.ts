/*
 * @Description:
 * @Date: 2020-11-30 18:11:46
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 10:39:17
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotGaugeDirective } from './g2plot-gauge.directive';

@NgModule({
  declarations: [G2plotGaugeDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotGaugeDirective]
})
export class G2plotGaugeModule { }
