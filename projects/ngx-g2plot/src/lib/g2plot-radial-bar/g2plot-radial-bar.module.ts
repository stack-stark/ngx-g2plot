/*
 * @Description: 
 * @Date: 2020-12-01 17:55:24
 * @LastEditors: tanmh
 * @LastEditTime: 2020-12-01 17:55:53
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotRadialBarDirective } from './g2plot-radial-bar.directive';



@NgModule({
  declarations: [G2plotRadialBarDirective],
  imports: [
    CommonModule
  ],
  exports:[G2plotRadialBarDirective]
})
export class G2plotRadialBarModule { }
