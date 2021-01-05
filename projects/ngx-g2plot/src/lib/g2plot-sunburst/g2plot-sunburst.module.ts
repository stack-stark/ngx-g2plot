/*
 * @Description:
 * @Date: 2020-12-01 17:53:39
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 17:54:09
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotSunburstDirective } from './g2plot-sunburst.directive';



@NgModule({
  declarations: [G2plotSunburstDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotSunburstDirective]
})
export class G2plotSunburstModule { }
