/*
 * @Description:
 * @Date: 2020-12-01 10:46:38
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 10:59:45
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotRadarDirective } from './g2plot-radar.directive';

@NgModule({
  declarations: [G2plotRadarDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotRadarDirective]
})
export class G2plotRadarModule { }
