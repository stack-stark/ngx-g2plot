/*
 * @Description:
 * @Date: 2020-12-01 10:46:19
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 10:55:33
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotLiquidDirective } from './g2plot-liquid.directive';

@NgModule({
  declarations: [G2plotLiquidDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotLiquidDirective]
})
export class G2plotLiquidModule { }
